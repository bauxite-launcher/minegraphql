const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type MinecraftVersion {
    id
  }
  
  type Query {
    minecraft: [MinecraftVersion]
  }
`

const resolvers = {
  Query: {
    minecraft: () => []
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
