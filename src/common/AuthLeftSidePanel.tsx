export default function AuthLeftSidePanel() {
	return (
		<div className="h-screen w-[55%] border p-12 bg-linear-to-br from-zinc-950 via-indigo-900 to-indigo-700 flex flex-col justify-between items-start">
			<h1 className="text-white text-xl font-bold font-['Plus_Jakarta_Sans']">
				Invoix
			</h1>

			<div className="">
				<h2 className="text-white text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10 mb-4">
					Invoice profesional
					<br />
					dalam hitungan menit.
				</h2>
				<p className="text-white/60 text-lg font-normal font-['Plus_Jakarta_Sans'] ">
					Platform manajemen invoice untuk freelancer Indonesia. Gratis
					selamanya.
				</p>
			</div>

			<div className="flex gap-6">
				<div className="flex-col">
					<h2 className="justify-start text-white text-2xl font-bold font-['Plus_Jakarta_Sans']">
						10K+
					</h2>
					<p className="justify-start text-white/50 text-sm font-normal font-['Plus_Jakarta_Sans']">
						Freelancer
					</p>
				</div>

				<div className="flex-col">
					<h2 className="justify-start text-white text-2xl font-bold font-['Plus_Jakarta_Sans']">
						50K+
					</h2>
					<p className="justify-start text-white/50 text-sm font-normal font-['Plus_Jakarta_Sans']">
						Invoice dibuat
					</p>
				</div>

				<div className="flex-col">
					<h2 className="justify-start text-white text-2xl font-bold font-['Plus_Jakarta_Sans']">
						98%
					</h2>
					<p className="justify-start text-white/50 text-sm font-normal font-['Plus_Jakarta_Sans']">
						Klien puas
					</p>
				</div>
			</div>
		</div>
	);
}
