import { CsvReaderReader } from './CsvReader.service'

interface IMatches {[key: string] : string[]}
interface IRefined {[key: string] : ITrivigoItem}


export interface ITrivigoItem {
  event_id : string; 
  event_image_path: string
  event_name: string;
  performance_start: string;
  performance_sold_out: string | '';
  event_category: string;
  ticket_type: string;
  ticket_min_price: string;
  ticket_max_price: string;
  ticket_currency: string | 'GBP';
  destination_id: string;
  destination_name: string;
  venue_id: string;
  venue_name: string;
  venue_address: string;
  venue_postal_code: string;
  venue_town: string;
  event_alternative_description: string;
  event_official_description: string;
  venue_phone: string;
}

interface DataReader {
	read(): void
	data: string[][]
}


// this accept any reader from csv
export class MainReader {
	static fromCsv(filename: string): MainReader {
		return new MainReader(new CsvReaderReader(filename))
	}

	matches: IMatches = {}
	refined: IRefined = {}
	

	constructor(public reader: DataReader) {}

	loadSet(): void {
		this.reader.read()
		
		this.reader.data.forEach(
			(data : any) => {

				while(data.length > 20) {
					data.pop()
				}

				this.matches[data[0]] = data
			}
		)

		// delete damned event_id : {} from , it took 3 million hours of me :)
		delete this.matches[Object.keys(this.matches).reverse().shift()!]

	}

	refine() {
		for(const [key, val] of Object.entries(this.matches)) {
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
				event_alternative_description: val[17],
				event_official_description: val[18],
				venue_phone: val[19],
			}
			console.log(this.refined[key]['event_alternative_description'].length)
		}
	}
}