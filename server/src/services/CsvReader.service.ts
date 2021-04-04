import fs from 'fs'

// CsvReader read csv s for us :)
export class CsvReader {
	data: string[][] = []

	constructor(public fileName: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(';')
			})
	}
}