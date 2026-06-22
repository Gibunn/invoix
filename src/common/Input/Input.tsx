import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({
	ref,
	disabled,
	className,
	...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }) {
	return (
		<input
			ref={ref}
			{...props}
			disabled={disabled}
			className={twMerge(
				"h-10 px-3 py-2.5 bg-violet-100/50 text-sm rounded-xl outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5",
				className,
				disabled && "cursor-not-allowed",
			)}
		/>
	);
}
