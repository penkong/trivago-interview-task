import {gql} from 'apollo-server'

export const typeDefs = gql`
  scalar Performance_start

  "A destinations has a list of events"
  type Destination {
    id: ID!
    events : [Event]
  }

  "A event has a list of schedule"
  type Event {
    event_id : ID!
    event_image_path : String
    event_name : String
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
    performance_starts : Performance_start
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

// event_id;
//   event_image_path;
//   event_name;
//   performance_starts;
//   performance_sold_out;
//   event_category;
//   ticket_type;
//   ticket_min_price;
//   ticket_max_price;
//   ticket_currency;
//   destination_id;
//   destination_name;
//   venue_id;
//   venue_name;
//   venue_address;
//   venue_postal_code;
//   venue_town;
//   event_alternative_description;
//   event_official_description;
  // venue_phone