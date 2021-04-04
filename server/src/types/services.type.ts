export interface IEvents {[key: string] : string[]}
export interface IRefined {[key: string] : ITrivigoItem}


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

export interface IDataReader {
	read(): void
	data: string[][]
}