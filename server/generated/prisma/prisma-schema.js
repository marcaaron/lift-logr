module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLog {
  count: Int!
}

type AggregateMovement {
  count: Int!
}

type AggregateSet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Log {
  id: ID!
  created_at: DateTime!
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set!]
  user: User!
}

type LogConnection {
  pageInfo: PageInfo!
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  created_at: DateTime!
  sets: SetCreateManyWithoutLogInput
  user: UserCreateOneWithoutLogsInput!
}

input LogCreateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  connect: [LogWhereUniqueInput!]
}

input LogCreateOneWithoutSetsInput {
  create: LogCreateWithoutSetsInput
  connect: LogWhereUniqueInput
}

input LogCreateWithoutSetsInput {
  created_at: DateTime!
  user: UserCreateOneWithoutLogsInput!
}

input LogCreateWithoutUserInput {
  created_at: DateTime!
  sets: SetCreateManyWithoutLogInput
}

type LogEdge {
  node: Log!
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  created_at_ASC
  created_at_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LogPreviousValues {
  id: ID!
  created_at: DateTime!
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogWhereInput
  AND: [LogSubscriptionWhereInput!]
  OR: [LogSubscriptionWhereInput!]
  NOT: [LogSubscriptionWhereInput!]
}

input LogUpdateInput {
  created_at: DateTime
  sets: SetUpdateManyWithoutLogInput
  user: UserUpdateOneWithoutLogsInput
}

input LogUpdateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  delete: [LogWhereUniqueInput!]
  connect: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LogUpsertWithWhereUniqueWithoutUserInput!]
}

input LogUpdateOneWithoutSetsInput {
  create: LogCreateWithoutSetsInput
  update: LogUpdateWithoutSetsDataInput
  upsert: LogUpsertWithoutSetsInput
  delete: Boolean
  connect: LogWhereUniqueInput
}

input LogUpdateWithoutSetsDataInput {
  created_at: DateTime
  user: UserUpdateOneWithoutLogsInput
}

input LogUpdateWithoutUserDataInput {
  created_at: DateTime
  sets: SetUpdateManyWithoutLogInput
}

input LogUpdateWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  data: LogUpdateWithoutUserDataInput!
}

input LogUpsertWithoutSetsInput {
  update: LogUpdateWithoutSetsDataInput!
  create: LogCreateWithoutSetsInput!
}

input LogUpsertWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  update: LogUpdateWithoutUserDataInput!
  create: LogCreateWithoutUserInput!
}

input LogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  created_at: DateTime
  created_at_not: DateTime
  created_at_in: [DateTime!]
  created_at_not_in: [DateTime!]
  created_at_lt: DateTime
  created_at_lte: DateTime
  created_at_gt: DateTime
  created_at_gte: DateTime
  sets_every: SetWhereInput
  sets_some: SetWhereInput
  sets_none: SetWhereInput
  user: UserWhereInput
  AND: [LogWhereInput!]
  OR: [LogWhereInput!]
  NOT: [LogWhereInput!]
}

input LogWhereUniqueInput {
  id: ID
}

scalar Long

type Movement {
  id: ID!
  name: String!
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set!]
}

type MovementConnection {
  pageInfo: PageInfo!
  edges: [MovementEdge]!
  aggregate: AggregateMovement!
}

input MovementCreateInput {
  name: String!
  sets: SetCreateManyWithoutMovementInput
}

input MovementCreateOneWithoutSetsInput {
  create: MovementCreateWithoutSetsInput
  connect: MovementWhereUniqueInput
}

input MovementCreateWithoutSetsInput {
  name: String!
}

type MovementEdge {
  node: Movement!
  cursor: String!
}

enum MovementOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MovementPreviousValues {
  id: ID!
  name: String!
}

type MovementSubscriptionPayload {
  mutation: MutationType!
  node: Movement
  updatedFields: [String!]
  previousValues: MovementPreviousValues
}

input MovementSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovementWhereInput
  AND: [MovementSubscriptionWhereInput!]
  OR: [MovementSubscriptionWhereInput!]
  NOT: [MovementSubscriptionWhereInput!]
}

input MovementUpdateInput {
  name: String
  sets: SetUpdateManyWithoutMovementInput
}

input MovementUpdateOneWithoutSetsInput {
  create: MovementCreateWithoutSetsInput
  update: MovementUpdateWithoutSetsDataInput
  upsert: MovementUpsertWithoutSetsInput
  delete: Boolean
  connect: MovementWhereUniqueInput
}

input MovementUpdateWithoutSetsDataInput {
  name: String
}

input MovementUpsertWithoutSetsInput {
  update: MovementUpdateWithoutSetsDataInput!
  create: MovementCreateWithoutSetsInput!
}

input MovementWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  sets_every: SetWhereInput
  sets_some: SetWhereInput
  sets_none: SetWhereInput
  AND: [MovementWhereInput!]
  OR: [MovementWhereInput!]
  NOT: [MovementWhereInput!]
}

input MovementWhereUniqueInput {
  id: ID
  name: String
}

type Mutation {
  createMovement(data: MovementCreateInput!): Movement!
  updateMovement(data: MovementUpdateInput!, where: MovementWhereUniqueInput!): Movement
  updateManyMovements(data: MovementUpdateInput!, where: MovementWhereInput): BatchPayload!
  upsertMovement(where: MovementWhereUniqueInput!, create: MovementCreateInput!, update: MovementUpdateInput!): Movement!
  deleteMovement(where: MovementWhereUniqueInput!): Movement
  deleteManyMovements(where: MovementWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createLog(data: LogCreateInput!): Log!
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateManyLogs(data: LogUpdateInput!, where: LogWhereInput): BatchPayload!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  createSet(data: SetCreateInput!): Set!
  updateSet(data: SetUpdateInput!, where: SetWhereUniqueInput!): Set
  updateManySets(data: SetUpdateInput!, where: SetWhereInput): BatchPayload!
  upsertSet(where: SetWhereUniqueInput!, create: SetCreateInput!, update: SetUpdateInput!): Set!
  deleteSet(where: SetWhereUniqueInput!): Set
  deleteManySets(where: SetWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  movement(where: MovementWhereUniqueInput!): Movement
  movements(where: MovementWhereInput, orderBy: MovementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movement]!
  movementsConnection(where: MovementWhereInput, orderBy: MovementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovementConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  log(where: LogWhereUniqueInput!): Log
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  set(where: SetWhereUniqueInput!): Set
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set]!
  setsConnection(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SetConnection!
  node(id: ID!): Node
}

type Set {
  id: ID!
  created_at: DateTime!
  movement: Movement!
  reps: Int!
  weight: Float!
  unit: String!
  user: User!
  log: Log!
}

type SetConnection {
  pageInfo: PageInfo!
  edges: [SetEdge]!
  aggregate: AggregateSet!
}

input SetCreateInput {
  created_at: DateTime!
  movement: MovementCreateOneWithoutSetsInput!
  reps: Int!
  weight: Float!
  unit: String!
  user: UserCreateOneWithoutSetsInput!
  log: LogCreateOneWithoutSetsInput!
}

input SetCreateManyWithoutLogInput {
  create: [SetCreateWithoutLogInput!]
  connect: [SetWhereUniqueInput!]
}

input SetCreateManyWithoutMovementInput {
  create: [SetCreateWithoutMovementInput!]
  connect: [SetWhereUniqueInput!]
}

input SetCreateManyWithoutUserInput {
  create: [SetCreateWithoutUserInput!]
  connect: [SetWhereUniqueInput!]
}

input SetCreateWithoutLogInput {
  created_at: DateTime!
  movement: MovementCreateOneWithoutSetsInput!
  reps: Int!
  weight: Float!
  unit: String!
  user: UserCreateOneWithoutSetsInput!
}

input SetCreateWithoutMovementInput {
  created_at: DateTime!
  reps: Int!
  weight: Float!
  unit: String!
  user: UserCreateOneWithoutSetsInput!
  log: LogCreateOneWithoutSetsInput!
}

input SetCreateWithoutUserInput {
  created_at: DateTime!
  movement: MovementCreateOneWithoutSetsInput!
  reps: Int!
  weight: Float!
  unit: String!
  log: LogCreateOneWithoutSetsInput!
}

type SetEdge {
  node: Set!
  cursor: String!
}

enum SetOrderByInput {
  id_ASC
  id_DESC
  created_at_ASC
  created_at_DESC
  reps_ASC
  reps_DESC
  weight_ASC
  weight_DESC
  unit_ASC
  unit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SetPreviousValues {
  id: ID!
  created_at: DateTime!
  reps: Int!
  weight: Float!
  unit: String!
}

type SetSubscriptionPayload {
  mutation: MutationType!
  node: Set
  updatedFields: [String!]
  previousValues: SetPreviousValues
}

input SetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SetWhereInput
  AND: [SetSubscriptionWhereInput!]
  OR: [SetSubscriptionWhereInput!]
  NOT: [SetSubscriptionWhereInput!]
}

input SetUpdateInput {
  created_at: DateTime
  movement: MovementUpdateOneWithoutSetsInput
  reps: Int
  weight: Float
  unit: String
  user: UserUpdateOneWithoutSetsInput
  log: LogUpdateOneWithoutSetsInput
}

input SetUpdateManyWithoutLogInput {
  create: [SetCreateWithoutLogInput!]
  delete: [SetWhereUniqueInput!]
  connect: [SetWhereUniqueInput!]
  disconnect: [SetWhereUniqueInput!]
  update: [SetUpdateWithWhereUniqueWithoutLogInput!]
  upsert: [SetUpsertWithWhereUniqueWithoutLogInput!]
}

input SetUpdateManyWithoutMovementInput {
  create: [SetCreateWithoutMovementInput!]
  delete: [SetWhereUniqueInput!]
  connect: [SetWhereUniqueInput!]
  disconnect: [SetWhereUniqueInput!]
  update: [SetUpdateWithWhereUniqueWithoutMovementInput!]
  upsert: [SetUpsertWithWhereUniqueWithoutMovementInput!]
}

input SetUpdateManyWithoutUserInput {
  create: [SetCreateWithoutUserInput!]
  delete: [SetWhereUniqueInput!]
  connect: [SetWhereUniqueInput!]
  disconnect: [SetWhereUniqueInput!]
  update: [SetUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [SetUpsertWithWhereUniqueWithoutUserInput!]
}

input SetUpdateWithoutLogDataInput {
  created_at: DateTime
  movement: MovementUpdateOneWithoutSetsInput
  reps: Int
  weight: Float
  unit: String
  user: UserUpdateOneWithoutSetsInput
}

input SetUpdateWithoutMovementDataInput {
  created_at: DateTime
  reps: Int
  weight: Float
  unit: String
  user: UserUpdateOneWithoutSetsInput
  log: LogUpdateOneWithoutSetsInput
}

input SetUpdateWithoutUserDataInput {
  created_at: DateTime
  movement: MovementUpdateOneWithoutSetsInput
  reps: Int
  weight: Float
  unit: String
  log: LogUpdateOneWithoutSetsInput
}

input SetUpdateWithWhereUniqueWithoutLogInput {
  where: SetWhereUniqueInput!
  data: SetUpdateWithoutLogDataInput!
}

input SetUpdateWithWhereUniqueWithoutMovementInput {
  where: SetWhereUniqueInput!
  data: SetUpdateWithoutMovementDataInput!
}

input SetUpdateWithWhereUniqueWithoutUserInput {
  where: SetWhereUniqueInput!
  data: SetUpdateWithoutUserDataInput!
}

input SetUpsertWithWhereUniqueWithoutLogInput {
  where: SetWhereUniqueInput!
  update: SetUpdateWithoutLogDataInput!
  create: SetCreateWithoutLogInput!
}

input SetUpsertWithWhereUniqueWithoutMovementInput {
  where: SetWhereUniqueInput!
  update: SetUpdateWithoutMovementDataInput!
  create: SetCreateWithoutMovementInput!
}

input SetUpsertWithWhereUniqueWithoutUserInput {
  where: SetWhereUniqueInput!
  update: SetUpdateWithoutUserDataInput!
  create: SetCreateWithoutUserInput!
}

input SetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  created_at: DateTime
  created_at_not: DateTime
  created_at_in: [DateTime!]
  created_at_not_in: [DateTime!]
  created_at_lt: DateTime
  created_at_lte: DateTime
  created_at_gt: DateTime
  created_at_gte: DateTime
  movement: MovementWhereInput
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  weight: Float
  weight_not: Float
  weight_in: [Float!]
  weight_not_in: [Float!]
  weight_lt: Float
  weight_lte: Float
  weight_gt: Float
  weight_gte: Float
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  user: UserWhereInput
  log: LogWhereInput
  AND: [SetWhereInput!]
  OR: [SetWhereInput!]
  NOT: [SetWhereInput!]
}

input SetWhereUniqueInput {
  id: ID
}

type Subscription {
  movement(where: MovementSubscriptionWhereInput): MovementSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  set(where: SetSubscriptionWhereInput): SetSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  password: String!
  logs: LogCreateManyWithoutUserInput
  sets: SetCreateManyWithoutUserInput
}

input UserCreateOneWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSetsInput {
  create: UserCreateWithoutSetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLogsInput {
  username: String!
  email: String!
  password: String!
  sets: SetCreateManyWithoutUserInput
}

input UserCreateWithoutSetsInput {
  username: String!
  email: String!
  password: String!
  logs: LogCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  logs: LogUpdateManyWithoutUserInput
  sets: SetUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  update: UserUpdateWithoutLogsDataInput
  upsert: UserUpsertWithoutLogsInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutSetsInput {
  create: UserCreateWithoutSetsInput
  update: UserUpdateWithoutSetsDataInput
  upsert: UserUpsertWithoutSetsInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLogsDataInput {
  username: String
  email: String
  password: String
  sets: SetUpdateManyWithoutUserInput
}

input UserUpdateWithoutSetsDataInput {
  username: String
  email: String
  password: String
  logs: LogUpdateManyWithoutUserInput
}

input UserUpsertWithoutLogsInput {
  update: UserUpdateWithoutLogsDataInput!
  create: UserCreateWithoutLogsInput!
}

input UserUpsertWithoutSetsInput {
  update: UserUpdateWithoutSetsDataInput!
  create: UserCreateWithoutSetsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  logs_every: LogWhereInput
  logs_some: LogWhereInput
  logs_none: LogWhereInput
  sets_every: SetWhereInput
  sets_some: SetWhereInput
  sets_none: SetWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    