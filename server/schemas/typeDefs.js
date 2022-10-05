const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Article {
    _id: ID
    title: String
    overview: String
    image: String
    datePosted: String
    user: [User]
    }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }


  type Query {
    users: User
    articles: Article
  }

`;

module.exports = typeDefs;
