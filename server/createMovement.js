const createMovement = {
  async createMovement(_, {name}, ctx) {
    const movement = await ctx.prisma.createMovement({name});
    return movement;
  }
}

module.exports = { createMovement }
