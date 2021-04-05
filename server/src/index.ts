import { PORT } from "./config";

// --- packages

import { ApolloServer } from "apollo-server";

// --- local

import { dataBootStraper, RedisPersist } from './services/';
import { typeDefs, resolvers } from './graphql';
// import { mockDemonstration } from './graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks : mockDemonstration,
  context: ({ req }) => ({ req, RedisPersist })
});

server.listen({ port: PORT },  () => {

  RedisPersist.on('ready', async () => {

    console.log('redis ready!');

    await dataBootStraper();

    console.log('data added to redis!');

  })
});

