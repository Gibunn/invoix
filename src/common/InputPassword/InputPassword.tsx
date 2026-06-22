import { Eye, EyeClosed } from "lucide-react";
import { type InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
	inputClassName?: string;
}

export function InputPassword({
	ref,
	disabled,
	className,
	inputClassName,
	...props
}: InputPasswordProps & { ref?: React.Ref<HTMLInputElement> }) {
	const [hidden, setHidden] = useState(true);

	return (
		<div
			className={twMerge(
				"h-10 px-3 py-2.5 bg-violet-100/50 rounded-xl flex outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5",
				className,
				disabled && "cursor-not-allowed",
			)}
		>
			<input
				ref={ref}
				{...props}
				disabled={disabled}
				type={hidden ? "password" : "text"}
				className={twMerge("w-full outline-none text-sm", inputClassName)}
			/>
			<button
				type="button"
				className="cursor-pointer"
				onClick={() => setHidden(!hidden)}
			>
				{hidden ? (
					<Eye size={16} color="#6B6B80" />
				) : (
					<EyeClosed size={16} color="#6B6B80" />
				)}
			</button>
		</div>
	);
}
