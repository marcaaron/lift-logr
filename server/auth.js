require('dotenv').config();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = {
  async signup(_, args, ctx) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.prisma.createUser({ ...args, password })

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },

  async login(_, { email, password }, ctx) {
    const user = await ctx.prisma.user({ email })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },
}

module.exports = { auth }
