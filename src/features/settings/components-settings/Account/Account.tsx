import { Trash2 } from "lucide-react";
import { Button } from "@/common/button";
import Container from "@/common/Container";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";

export default function Account() {
	return (
		<Container className="p-6 w-fit">
			<h2 className="text-zinc-950 text-sm font-semibold mb-5">
				Pengaturan Akun
			</h2>

			<form className="flex flex-col gap-5">
				<div className="flex flex-col gap-1.5">
					<Label>Email</Label>
					<Input className="w-131.5" placeholder="Masukkan Email" />
				</div>

				<div className="flex flex-col gap-1.5">
					<Label>Zona Waktu</Label>
					<Input className="w-131.5" />
				</div>

				<div className="flex gap-2.5 border-b border-zinc-950/5 pb-5">
					<Button className="px-4 w-40 text-sm">Simpan Perubahan</Button>
					<Button variant="base" className="px-4 w-40 text-sm">
						Ganti Password
					</Button>
				</div>
			</form>

			<div className="pt-5">
				<h2 className="text-red-500 text-xs font-semibold mb-3">
					ZONA BAHAYA
				</h2>
				<Button
					variant="danger"
					className="flex px-4 text-sm font-medium gap-2 mb-1.5"
				>
					<Trash2 color="#E7000B" size={16} />
					Hapus Akun
				</Button>
				<p className="text-gray-500 text-xs">
					Semua data akan dihapus permanen dan tidak bisa dipulihkan.
				</p>
			</div>
		</Container>
	);
}
