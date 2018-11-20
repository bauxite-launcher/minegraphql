import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

export const resolver = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};
