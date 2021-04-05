import { MockList } from "apollo-server";

export const mockDemonstration = {
  Query: () => ({
    getDestinations: () => new MockList([1, 4])
  }),
  Destination: () => ({
    destination_id: () => '546y345634',
    destination_name: () => 'destination name here',
    events: () => {
      return [{
        event_id : 'event_id',
        event_image_path : '/fsdfds/fsdf/ds',
        event_name : 'event name ',
        event_category : 'categories sdf',
        event_alternative_description: 'fdsfdsf',
        event_official_description: 'fsdfsdfsdf',
        schedules: [{
          venue: {
            venue_id: 'venue_id' ,
            venue_name: 'venue_name',
            venue_address: 'venue_address',
            venue_postal_code: 'venue_postal_code',
            venue_town: 'venue_town',
            venue_phone: 'venue_phone',
          },
          performances: [{
            performance_starts : 'Performance_start',
            performance_sold_out: 'Performance_sold',
            tickets : [{
                ticket_type: 'ticket_type',
                ticket_min_price: 'ticket_min_price',
                ticket_max_price: 'ticket_max_price',
                ticket_currency: 'ticket_currency',
            }],
          }]
        }]
      }];
    },
  }),
};
