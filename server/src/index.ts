// --- poly

import { PORT } from "./config";
import "reflect-metadata";


// --- packages

import { ApolloServer } from "apollo-server";

// --- local

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { dataBootStraper, RedisPersist } from './services/';



  
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, RedisPersist })
});

server.listen({ port: PORT },  () => {
  RedisPersist.on('ready', async () => {
    console.log('redis ready!');
    await dataBootStraper();
    console.log('data added to db!')
  })
});

