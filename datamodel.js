type Movement {
  id: ID!
  name: String!
}

type User {
  id: ID!
  email: String!
  password: String!
  movements: [Movement] // resolve list of most recent movements
}

type Log {
  id: ID!
  created_at: String!
  sets: [Set]
  user: [User]
}

type Set {
  id: ID!
  movement: Movement!
  reps: Int!
  weight: Int!
  unit: String!
  user: [User]
}

// get users most recent attempt at specific movement
// get users most recent movements
