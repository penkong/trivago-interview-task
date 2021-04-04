import { CsvReader } from './CsvReader.service'
import { IEvents, IDataReader } from '../types'


// this accept any reader from csv
export class MainInfoBuilder {

	events: IEvents = {}

	// makeCsv leverage composition pattern
	static makeCsv(filename: string): MainInfoBuilder {
		return new MainInfoBuilder(new CsvReader(filename))
	}

	private constructor(public reader: IDataReader) {}

	// loader laod data to matches with IMatches pattern to 
	// let us save info to redis or any other db , also
	// by this pattern we make it unique
	loader(): void {
		this.reader.read()
		
		this.reader.data.forEach(
			(data : any) => {

				while(data.length > 20) {
					data.pop()
				}

				this.events[data[0]] = data
			}
		)

		// delete damned event_id : {} from source, below line took near 3 million hours of me :)
		delete this.events[Object.keys(this.events).reverse().shift()!]
	}

}

