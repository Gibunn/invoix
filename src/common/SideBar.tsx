import AppLogo from "./AppLogo";

export default function SideBar() {
	return (
		<div className="bg-black w-55 h-screen sticky">
			<div className="py-6 px-5">
				<AppLogo />
			</div>
		</div>
	);
}
