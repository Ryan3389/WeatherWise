const { User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find()
            } catch (error) {
                console.error('Error finding users', error)
            }
        }
    },

    Mutation: {
        createUser: async (parent, { firstName, lastName, email, password }) => {
            try {
                const user = await User.create({ email: email.trim().toLowerCase(), firstName, lastName, password })

                const token = signToken(user)

                return { token, user }
            } catch (error) {
                console.error('Error creating user: ', error)
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })
                if (!user) {
                    throw AuthenticationError
                }
                const correctPw = await user.isCorrectPassword(password)
                if (!correctPw) {
                    throw AuthenticationError
                }
                const token = signToken(user)
                return { token, user }
            } catch (error) {
                console.error('Login error: ', error)
            }
        }
    },
}

module.exports = resolvers


