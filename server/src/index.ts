// --- poly

import "reflect-metadata";
require('dotenv-safe').config();

// --- packages

import { ApolloServer } from "apollo-server";

// --- local

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { dataBootStraper, RedisPersist } from './services/';


const PORT = process.env.PORT;
  
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

