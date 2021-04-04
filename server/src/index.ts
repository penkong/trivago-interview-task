// const __prod__ = process.env.NODE_ENV === "production";
// --- poly

import "reflect-metadata";
require('dotenv-safe').config();

// --- packages

import { ApolloServer } from "apollo-server";

// --- local

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { MainReader } from './services/';


const PORT = process.env.PORT;
  
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

server.listen({ port: PORT }, () => {
  const reader = MainReader.fromCsv('./events_trivago_case_study.csv')
  reader.load()
  const el = reader.matches
  console.log(el)
});

export interface ITrivigoItem {
  event_id : number; 
  event_image_path: string
  event_name: string;
  performance_start: Date;
  performance_sold_out: Date | '';
  event_category: string;
  ticket_type: string;
  ticket_min_price: number;
  ticket_max_price: number;
  ticket_currency: string;
  destination_id: number;
  destination_name: string;
  venue_id: number;
  venue_name: string;
  venue_address: string;
  venue_postal_code: string;
  venue_town: string;
  event_alternative_description: string;
  event_official_description: string;
  venue_phone: string;
}