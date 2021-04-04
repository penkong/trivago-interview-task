import {gql} from 'apollo-server'

export const typeDefs = gql`
  "A destinations has a list of events"
  type Destination {
    id: ID!
    events : [Event]
  }

  "A event has a list of schedule"
  type Event {
    id: ID!
    schedules : [Schedule]
  }

  "A schedule has a venue and a list of performances"
  type Schedule {
    id: ID!
    venue : Venue!
    performances : [Performance]
  }
  
  "A performance has a list of tickets"
  type Performance {
    id: ID!
    tickets : [Ticket]
  }
  
  type Venue {
    id: ID!
  }

  type Ticket {
    id: ID!
  }

  type Query {
    getDestinations: [Destination]
  }

  type Mutation {
    deleteDestination(destinationId: ID!): Destination!
  }
`;
