import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
	children,
	disabled,
	className,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			type={type}
			className={twMerge(
				"bg-violet-700 rounded-xl text-white font-semibold font-['Plus_Jakarta_Sans'] py-2.5",
				disabled ? "cursor-not-allowed" : "cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
