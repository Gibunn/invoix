import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { InputPassword } from "@/common/InputPassword";

export default function SignIn() {
	return (
		<div className="w-[35%] p-12 bg-white flex flex-col items-center justify-center h-screen">
			<div className="mb-7 w-full">
				<h2 className="text-zinc-950 text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-1">
					Selamat datang kembali
				</h2>
				<p className="justify-start text-gray-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-5">
					Masuk ke akun Invoix kamu
				</p>
			</div>

			<form className="flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-1.5 w-full">
					<label
						htmlFor="email"
						className="text-zinc-950 text-sm font-medium font-['Plus_Jakarta_Sans'] "
					>
						Email
					</label>
					<Input id="email" placeholder="Masukkan email" />
				</div>
				<div className="flex flex-col gap-1.5 w-full">
					<label
						htmlFor="password"
						className="text-zinc-950 text-sm font-medium font-['Plus_Jakarta_Sans'] "
					>
						Password
					</label>
					<InputPassword id="password" placeholder="Masukkan password" />
				</div>

				<Button>Masuk</Button>
			</form>
		</div>
	);
}
