const { Prisma } = require('./generated/prisma');
const { ApolloServer, gql } = require('apollo-server');
const { AuthPayload } = require('./AuthPayload.js');
const { auth } = require('./auth.js');

const typeDefs = gql`
  type Movement {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    created_at: String!
    username: String!
    email: String!
  }

  type Query {
    movements: [Movement]
    user: User
  }

  type Mutation {
    signup(email: String!, password: String!, username: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

const resolvers = {
  Query: {
    movements: async (_, {}, ctx) => {
      const movements = await ctx.prisma.movements();
      return movements;
    },
    ...AuthPayload
  },
  Mutation: {
    ...auth
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
