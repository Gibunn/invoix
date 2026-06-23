import type { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, htmlFor, children, ...props }: LabelProps) {
	return (
		<label
			{...props}
			htmlFor={htmlFor}
			className={twMerge("text-zinc-950 text-sm font-medium", className)}
		>
			{children}
		</label>
	);
}
