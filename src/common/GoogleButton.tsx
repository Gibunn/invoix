import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface GoogleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GoogleButton({
	className,
	children,
	type = "button",
	...props
}: GoogleButtonProps) {
	return (
		<button
			{...props}
			type={type}
			className={twMerge(
				"cursor-pointer py-2.5 h-10 w-full mb-4 rounded-xl outline outline-offset-[-0.74px] outline-zinc-950/5 flex justify-center items-center gap-2.5",
				className,
			)}
		>
			<img src="/google.svg" />
			<span className="text-zinc-950 text-sm font-medium">{children}</span>
		</button>
	);
}
