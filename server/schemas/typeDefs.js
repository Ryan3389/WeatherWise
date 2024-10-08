const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }

   type Query {
    users: [User]!
   }

    type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    }
`
module.exports = typeDefs