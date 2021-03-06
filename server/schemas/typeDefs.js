const { gql } = require("apollo-server-micro");

const typeDefs = gql`
	type User {
		id: ID
		name: String!
		password: String!
		email: String!
		wishes: [Wish]
	}

	type Wish {
		id: ID
		wishText: String!
		isCompleted: Boolean!
		createdAt: String
		user: User!
	}

	type Query {
		me: User
		users: [User]
		user(id: String!): User
		wishes: [Wish]
		wish(id: ID!): Wish
	}

	type Mutation {
		addWish(wishText: String!, userId: String!): Wish
		markWishDone(wishId: String!): Wish
	}
`;

module.exports = typeDefs;
