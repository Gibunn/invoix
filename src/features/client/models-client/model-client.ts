export interface Client {
	fullname: string;
	email: string;
	phone_number: string;
	total_invoices: number;
	total_amount: number;
	total_paid: number;
	more?: string;
}
