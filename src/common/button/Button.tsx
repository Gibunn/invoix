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
				"bg-violet-700 flex justify-center items-center rounded-xl text-white font-semibold py-2.5",
				disabled ? "cursor-not-allowed" : "cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
