import {gql} from 'apollo-server'

// "it can have id: ID! field for more perfection"
export const typeDefs = gql`

  "many more scalar and enums and all good things can add to typeDefs"
  scalar Performance_start

  """
    A destinations has a list of events
    it can have id: ID! field for more perfection

  """
  type Destination {
    destination_id: String!
    destination_name: String!
    events : [Event!]
  }
    
  """
    A event has a list of schedule
    it can have id: ID! field for more perfection

  """
  type Event {
    event_id : String!
    event_image_path : String!
    event_name : String!
    event_category : String!
    event_alternative_description: String
    event_official_description: String
    schedules : [Schedule!]
  }
  
  """
    A schedule has a venue and a list of performances
    it can have id: ID! field for more perfection

  """
  type Schedule {
    venue : Venue!
    performances : [Performance!]
  }
  
  """
    A performance has a list of tickets
    it can have id: ID! field for more perfection

  """
  type Performance {
    performance_starts : Performance_start!
    performance_sold_out: Performance_start
    tickets : [Ticket!]
  }
  
  """
    A venue info
    it can have id: ID! field for more perfection

  """
  type Venue {
    venue_id: String!
    venue_name: String!
    venue_address: String!
    venue_postal_code: String
    venue_town: String
    venue_phone: String
  }
  
  """
    A ticket info
    it can have id: ID! field for more perfection

  """
  type Ticket {
    ticket_type: String!
    ticket_min_price: String!
    ticket_max_price: String!
    ticket_currency: String!
  }
  
  """

    Many Query can define but base on Thomas Request : 
    As Long as the client can retrieve information about events

  """
  type Query {

    """

      use for mock , it has mock Implementaion
      getDestinations get list of all destination in DB, 

    """
    getDestinations: [Destination!]!

    "get an Event from redis"
    getEvent(event_id: String) : Event!
  }

`;
