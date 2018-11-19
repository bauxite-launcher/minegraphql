const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type MinecraftVersion {
    id: ID!
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
  console.log(`Server listening at ${url}`);
});
