const { getUserId } = require('./utils.js');

const AuthPayload = {
  user: (_, {}, ctx) => {
    return ctx.prisma.user({ id: getUserId(ctx) });
  }
}

module.exports = { AuthPayload }
