import { Outlet } from "react-router";
import DashboardHeader from "@/common/DashboardHeader";
import SideBar from "@/common/side-bar/SideBar";

export default function DashboardLayout() {
	return (
		<main className="flex">
			<SideBar />
			<div className="w-full bg-[#F5F5F8]">
				<DashboardHeader />
				<Outlet />
			</div>
		</main>
	);
}
