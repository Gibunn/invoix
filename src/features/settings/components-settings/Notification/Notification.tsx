import { Switch } from "@headlessui/react";
import { useState } from "react";
import Container from "@/common/Container";

export default function Notification() {
	const [enabled1, setEnabled1] = useState(false);
	const [enabled2, setEnabled2] = useState(false);

	return (
		<Container className="w-xl p-6">
			<h2 className="text-zinc-950 text-sm font-semibold mb-5">
				Notifikasi & Reminder
			</h2>

			<div className="flex justify-between border-b py-4 border-zinc-950/5">
				<div>
					<h3 className="mb-0.5">Reminder H-3</h3>
					<p className="text-gray-500 text-xs">
						Otomatis 3 hari sebelum due date
					</p>
				</div>
				<Switch
					checked={enabled1}
					onChange={setEnabled1}
					className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-300 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-violet-700 data-focus:outline data-focus:outline-white"
				>
					<span
						aria-hidden="true"
						className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
					/>
				</Switch>
			</div>

			<div className="flex justify-between py-4">
				<div>
					<h3 className="mb-0.5">Reminder H-3</h3>
					<p className="text-gray-500 text-xs">
						Otomatis 3 hari sebelum due date
					</p>
				</div>
				<Switch
					checked={enabled2}
					onChange={setEnabled2}
					className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-300 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-violet-700 data-focus:outline data-focus:outline-white"
				>
					<span
						aria-hidden="true"
						className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
					/>
				</Switch>
			</div>
		</Container>
	);
}
