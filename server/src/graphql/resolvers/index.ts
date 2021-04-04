import { destinationResolvers } from './destinations';

export const resolvers = {
  Query: {
    ...destinationResolvers.Query
  },
  Mutation: {
    ...destinationResolvers.Mutation,
  }
};