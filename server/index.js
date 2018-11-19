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

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
