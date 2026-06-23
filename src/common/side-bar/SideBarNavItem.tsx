import type { ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

interface SideBarNavItemProps {
	to: string;
	children?: ReactNode;
}

export default function SideBarNavItem({ to, children }: SideBarNavItemProps) {
	const curPath = useLocation().pathname;

	return (
		<NavLink
			to={to}
			className={`${
				curPath === to
					? "bg-white/20 text-white text-sm px-3 py-2.5 w-full rounded-xl flex justify-start items-center gap-3"
					: "text-white/60 px-3 py-2.5 w-full rounded-xl flex justify-start items-center gap-3 hover:bg-white/20 text-sm"
			}`}
		>
			{children}
		</NavLink>
	);
}
