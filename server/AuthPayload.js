const { getUserId } = require('./utils.js');

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

const AuthPayload = {
  user: (_, {}, ctx) => {
    return ctx.prisma.user({ id: getUserId(ctx) });
  }
}

module.exports = { AuthPayload }
