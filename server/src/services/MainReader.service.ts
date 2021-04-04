import { CsvReader } from './CsvReader.service'
import { IMatches, IRefined, IDataReader } from '../types/'


// this accept any reader from csv
export class MainInfoBuilder {

	matches: IMatches = {}
	refined: IRefined = {}


	static makeCsv(filename: string): MainInfoBuilder {
		return new MainInfoBuilder(new CsvReader(filename))
	}


	constructor(public reader: IDataReader) {}

	loader(): void {
		this.reader.read()
		
		this.reader.data.forEach(
			(data : any) => {

				while(data.length > 20) {
					data.pop()
				}

				this.matches[data[0]] = data
			}
		)

		// delete damned event_id : {} from source, it took 3 million hours of me :)
		delete this.matches[Object.keys(this.matches).reverse().shift()!]
	}

	refiner() {
		for(const [key, val] of Object.entries(this.matches)) {
			
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

	isPhone(info: string) {
		return parseInt(info.split(' ')[0]) ?  info  : '' ;
	}

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

