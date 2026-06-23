import { Outlet } from "react-router";
import SideBar from "@/common/side-bar/SideBar";

export default function DashboardLayout() {
	return (
		<main className="flex">
			<SideBar />
			<Outlet />
		</main>
	);
}
