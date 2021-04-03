// --- poly

import "reflect-metadata";
require('dotenv-safe').config();

// --- packages

import path from "path";
import cors from "cors";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// --- local


import { HelloWorldResolver } from './resolvers';


// constants
// const __prod__ = process.env.NODE_ENV === "production";

// starter
const bootstrap = async () => {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [],
  });

  

  const app = express();

  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );


  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver],
      validate: false,
    })
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT!), () => {
    console.log(`started on 5000`);
  });
};

bootstrap().catch((err) => {
  console.error(err);
});
