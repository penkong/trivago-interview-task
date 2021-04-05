// import { destinationResolvers } from './destinations';
// import { eventResolvers } from './destinations';

import { IGetEvent } from '../../types/';
import { RedisPersist } from '../../services/';

export const resolvers = {
  Query: {

    // ...destinationResolvers.Query,
    // ...eventsResolvers.Query,
    // ...performanceResolvers.Query,
    // ...venueResolvers.Query,

    async getDestinations() {
      return 3
    },

    async getEvent(_: any, {event_id}: {[key: string]:string}) : Promise<IGetEvent> {

      // const start = Date.now()

      const exist = await RedisPersist.exists(event_id)
      if(exist) {
        const e  = await RedisPersist.hgetall(event_id)

        // console.log(Date.now() - start)

        return {
          event_id: e.event_id,
          event_name: e.event_name,
          event_image_path: e.event_image_path,
          event_category: e.event_category,
          event_alternative_description: e.event_alternative_description,
          event_official_description: e.event_official_description
        }
      }

      throw new Error('Invalid Params, here ...')
    },
  },
  // Mutation: {
  //   ...destinationResolvers.Mutation,
  //   ...eventsResolvers.Mutation,
  //   ...performanceResolvers.Mutation,
  //   ...venueResolvers.Mutation,
  //   ...any other resolver
  // }
};