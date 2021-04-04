import { IEvents, IRefined } from '../types/';

export class TrivigoInfoRefinery {

  refined: IRefined = {}


  // makeCsv leverage composition pattern
	static makeData(events: IEvents): TrivigoInfoRefinery {
		return new TrivigoInfoRefinery(events)
	}

	constructor(public info: IEvents) {}

  // refiner map loaded data to a shape that other part of app can
	// use base on event_id
  refiner() {
		for(const [key, val] of Object.entries(this.info)) {
			
			const [	
				event_alternative_description,
				event_official_description,
				venue_phone
			] = this.conflictResolver(val[19], val[18], val[17])

			this.refined[key] = {
				event_id : val[0], 
				event_image_path: val[1],
				event_name: val[2],
				performance_start: val[3],
				performance_sold_out: val[4],
				event_category: val[5],
				ticket_type: val[6],
				ticket_min_price: val[7],
				ticket_max_price: val[8],
				ticket_currency: val[9],
				destination_id: val[10],
				destination_name: val[11],
				venue_id: val[12],
				venue_name: val[13],
				venue_address: val[14],
				venue_postal_code: val[15],
				venue_town: val[16],
				event_alternative_description,
				event_official_description,
				venue_phone
			}
		}
	}

  // isPhone is specific to this class , and this type of csv 
  // and maybe not useful to draw it out as utility.
  // it detect the last element of array is phone or a description.
	isPhone(el: string) {
		return parseInt(el.split(' ')[0]) ?  el  : '' ;
	}

  // conflictResolver is fully related to this class and this type of csv
	// last 3 part of each row in provided csv have overlap with eachother
	// in some venue phone contain descriptions 
	conflictResolver(el1: string, el2: string, el3: string) {
			let alternative = '';
			let official = '';
			let phone = '';

			if (!this.isPhone(el1)) {

				phone = '';
				if(el2.length < 4) official = el1;
				else alternative = el3 + el1;

			} else {

				phone = el1;
				official = el2.length > 4 ? el2 : '';
				alternative = el3

			}

		return [alternative, official, phone]
	}
}