const { getUserId } = require('./utils');

const createLog = {
  async createLog(_, {sets, created_at}, ctx) {
    const user_id = getUserId(ctx);
    const connectedSets = sets.map(set=>{
      return {
        created_at,
        reps: set.reps,
        weight: set.weight,
        unit: set.unit,
        movement: {
          connect: {
            id: set.movement_id
          }
        },
        user: {
          connect: {
            id: user_id
          }
        }
      }
    });

    const log = await ctx.prisma.createLog({
      created_at,
      user:{
        connect: {
          id: user_id
        }
      },
      sets: {
        create: connectedSets
      }
    });
    return log;
  }
}

module.exports = { createLog }
