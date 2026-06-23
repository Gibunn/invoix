import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface SideBarNavItemProps {
	to: string;
	children?: ReactNode;
}

export default function SideBarNavItem({ to, children }: SideBarNavItemProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`${
					isActive
						? "bg-white/20 text-white text-sm px-3 py-2.5 w-full rounded-xl flex justify-start items-center gap-3"
						: "text-white/60 px-3 py-2.5 w-full rounded-xl flex justify-start items-center gap-3 hover:bg-white/20 text-sm"
				}`
			}
		>
			{children}
		</NavLink>
	);
}
