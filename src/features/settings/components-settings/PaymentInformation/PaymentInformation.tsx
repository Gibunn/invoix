import { Button } from "@/common/button";
import Container from "@/common/Container";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";

export default function PaymentInformation() {
	return (
		<Container className="p-6 w-fit">
			<h2 className="text-zinc-950 text-sm font-semibold mb-4">
				Info Pembayaran
			</h2>

			<p className="text-gray-500 text-sm mb-5">
				Info ini muncul di semua invoice.
			</p>

			<form className="flex flex-col gap-5">
				<div className="flex gap-4">
					<div className="flex flex-col gap-1.5">
						<Label>Nama Bank</Label>
						<Input className="w-64" placeholder="Masukkan nama bank" />
					</div>

					<div className="flex flex-col gap-1.5">
						<Label>No. Rekening</Label>
						<Input className="w-64" placeholder="Masukkan no rekening" />
					</div>
				</div>

				<div className="flex flex-col gap-1.5">
					<Label>Nama Pemilik</Label>
					<Input className="w-full" placeholder="Masukkan nama pemilik" />
				</div>

				<div className="flex flex-col gap-1.5">
					<Label>
						NPWP <span className="text-gray-500">{"(opsional)"}</span>
					</Label>
					<Input
						className="w-full self-stretch"
						placeholder="xx.xxx.xxx.x-xxx.xxx"
					/>
				</div>

				<Button className="px-4 w-40 mt-5 text-sm">Simpan Perubahan</Button>
			</form>
		</Container>
	);
}
