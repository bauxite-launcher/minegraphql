// @flow
import { ApolloServer } from 'apollo-server';
import glue from 'schemaglue';
import { graphqls2s } from 'graphql-s2s';
import * as context from '../api';

const jsPath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

const { schema, resolver } = glue(`{graphql,${jsPath}/resolvers}`);

const typeDefs = graphqls2s.transpileSchema(schema);

const server = new ApolloServer({ typeDefs, resolvers: resolver, context });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at ${url}`);
});
