const { User, Article } = require('../models')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v");
    },
    articles: async () => {
      return Article.find().populate('users');
    }
  },
};

module.exports = resolvers;
