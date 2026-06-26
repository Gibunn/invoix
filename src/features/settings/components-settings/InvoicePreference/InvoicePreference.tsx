import { Button } from "@/common/button";
import Container from "@/common/Container";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";

export default function InvoicePreference() {
	return (
		<Container className="p-6 w-fit">
			<h2 className="text-zinc-950 text-sm font-semibold mb-5">
				Preferensi Invoice
			</h2>

			<form className="flex flex-col gap-5">
				<div className="flex flex-col gap-1.5">
					<Label>Default Payment Terms</Label>
					<Input
						className="w-131.5"
						placeholder="Masukkan Default Payment Terms"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<Label>Format Nomor Invoice</Label>
					<Input
						className="w-131.5"
						defaultValue="INV/{{YYYY}}/{{NNN}}"
						placeholder="Masukkan Format Nomor Invoice"
					/>
					<p className="text-gray-500 text-xs">
						Preview:
						<span className="text-zinc-950 text-xs font-['Menlo']">
							INV/2024/013
						</span>
					</p>
				</div>

				<Button className="px-4 w-40 text-sm">Simpan Perubahan</Button>
			</form>
		</Container>
	);
}
