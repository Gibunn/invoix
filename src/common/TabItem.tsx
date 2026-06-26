import { Tab } from "@headlessui/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function CustomTabItem({
	className,
	type = "button",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type={type}
			className={twMerge(
				"py-1.5 px-3.5 cursor-pointer rounded-[10px] bg-white flex items-center justify-center text-xs font-semibold text-[#6B6B80] transition",
				className,
			)}
			{...props}
		/>
	);
}

export function TabItem({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
	return (
		<Tab className="outline-none">
			{({ hover, selected }) => (
				<CustomTabItem
					className={`
						${className}
						${hover && "bg-[#7008E7] text-white"}
						${selected && "bg-[#7008E7] text-white"}
					`}
				>
					{children}
				</CustomTabItem>
			)}
		</Tab>
	);
}
