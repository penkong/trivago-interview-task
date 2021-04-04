// const __prod__ = process.env.NODE_ENV === "production";
// --- poly

import "reflect-metadata";
require('dotenv-safe').config();

// --- packages

import { ApolloServer } from "apollo-server";

// --- local

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { MainInfoBuilder } from './services/';


const PORT = process.env.PORT;
  
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

server.listen({ port: PORT }, () => {
  const reader = MainInfoBuilder.makeCsv('./events_trivago_case_study.csv')
  reader.loader()
  reader.refiner()
});

