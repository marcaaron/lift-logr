const { Prisma } = require('./generated/prisma');
const { ApolloServer, gql } = require('apollo-server');
const { AuthPayload } = require('./AuthPayload.js');
const { auth } = require('./auth.js');
const { createLog } = require('./createLog.js');
const { createMovement } = require('./createMovement.js');
const { getUserId } = require('./utils.js');

const typeDefs = gql`
  type Movement {
    id: ID!
    name: String!
    sets: [Set]
  }

  type Log {
    id: ID!
    created_at: String!
    sets: [Set]
    user: User!
  }

  type User {
    id: ID!
    created_at: String!
    username: String!
    email: String!
    logs: [Log]
    sets: [Set]
  }

  type Set {
    id: ID!
    created_at: String!
    reps: Int!
    weight: Float!
    unit: String!
    user: User!
    movement: Movement!
    log: Log
  }

  input SetInput {
    reps: Int!
    weight: Float!
    unit: String!
    movement_id: ID!
  }

  input SetInputList {
    sets: [SetInput]
  }

  type Query {
    movements: [Movement]
    logs: [Log]
    user: User
    users: [User]
    sets: [Set]
    getUserLogs: [Log]
    getPastLog(id:String!): Log
  }

  type Mutation {
    signup(email: String!, password: String!, username: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createLog(sets: [SetInput], created_at: String!): Log
    createMovement(name: String!): Movement
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

const resolvers = {
  Query: {
    movements: async (_, {}, ctx) => {
      const movements = await ctx.prisma.movements({orderBy: 'name_ASC'});
      return movements;
    },
    logs: async (_, {}, ctx) => {
      const logs = await ctx.prisma.logs({orderBy: "created_at_DESC"});
      return logs;
    },
    getUserLogs: async (_, args, ctx) => {
      const logs = await ctx.prisma.user({id: getUserId(ctx)}).logs({orderBy: "created_at_DESC"});
      return logs;
    },
    getPastLog: async (_, {id}, ctx)=> {
      const log = await ctx.prisma.log({id});
      return log;
    },
    users: async (_, {}, ctx) => {
      const users = await ctx.prisma.users();
      return users;
    },
    sets: async (_, {}, ctx) => {
      const sets = await ctx.prisma.sets();
      return sets;
    },
    ...AuthPayload
  },
  Mutation: {
    ...auth,
    ...createLog,
    ...createMovement
  },
  Log: {
    sets(root, args, context){
      return context.prisma.log({id:root.id}).sets()
    },
    user(root, args, context){
      return context.prisma.log({id:root.id}).user()
    }
  },
  Set: {
    movement(root, args, context){
      return context.prisma.set({id:root.id}).movement()
    },
    log(root, args, context){
      return context.prisma.set({id:root.id}).log()
    },
    user(root, args, context){
      return context.prisma.set({id:root.id}).user()
    }
  },
  User: {
    logs(root, args, context){
      return context.prisma.user({id:root.id}).logs({orderBy: "created_at_DESC"})
    },
    sets(root, args, context){
      return context.prisma.user({id:root.id}).sets()
    }
  },
  Movement: {
    sets(root, args, context){
      return context.prisma.movement({id:root.id}).sets()
    }
  }
};

const context = (req) => {
  return {
    ...req,
    prisma: new Prisma({})
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
