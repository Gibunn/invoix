import {
	FileText,
	LayoutDashboard,
	LogOut,
	Settings,
	Users,
} from "lucide-react";
import AppLogo from "../AppLogo";
import ProfileImage from "../ProfileImage";
import SideBarNavItem from "./SideBarNavItem";

const navItems = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: <LayoutDashboard size={16} />,
	},
	{ label: "Invoice", to: "/invoice", icon: <FileText size={16} /> },
	{ label: "Klien", to: "/client", icon: <Users size={16} /> },
	{ label: "Pengaturan", to: "/settings", icon: <Settings size={16} /> },
];

export default function SideBar() {
	return (
		<div className="bg-black w-55 h-screen flex flex-col justify-between">
			<div>
				<div className="py-6 px-5">
					<AppLogo />
				</div>

				<div className="py-4 px-3 flex flex-col gap-0.5">
					{navItems.map((item) => (
						<SideBarNavItem key={item.label} to={item.to}>
							{item.icon}
							{item.label}
						</SideBarNavItem>
					))}
				</div>
			</div>

			<div className="py-6 px-5 border-t flex justify-between items-center border-white/10">
				<div className="flex items-center gap-3">
					<ProfileImage name="M Gibran" />
					<div>
						<h2 className="text-white text-sm font-medium w-25 truncate">
							M Gibran
						</h2>
						<h2 className="text-white/40 text-xs font-normal w-25 truncate">
							Fullstack Developer
						</h2>
					</div>
				</div>

				<button className="cursor-pointer" type="button">
					<LogOut className="text-white/40" size={16} />
				</button>
			</div>
		</div>
	);
}
