"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "https://logr-prisma.herokuapp.com/logr-prisma/dev",
  secret: "blue-ivy-radish"
});
exports.prisma = new exports.Prisma();
