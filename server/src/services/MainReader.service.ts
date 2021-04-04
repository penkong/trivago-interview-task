import { CsvReaderReader } from './CsvReader.service'

interface IMatches {[key: string] : string[]}

interface DataReader {
	read(): void
	data: string[][]
}

// interface Data {}

// this accept any reader from csv
export class MainReader {
	static fromCsv(filename: string): MainReader {
		return new MainReader(new CsvReaderReader(filename))
	}

	matches: IMatches = {}
	

	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read()
		this.reader.data.forEach(
			(data : any) => {
				while(data.length > 20) {
					data.pop()
				}
				this.matches[data[0]] = data.length
			}
		)
		
	}
}