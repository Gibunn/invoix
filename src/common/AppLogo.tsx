import { twMerge } from "tailwind-merge";

interface AppLogoProps {
	className?: string;
}

export default function AppLogo({ className }: AppLogoProps) {
	return (
		<h1 className={twMerge("text-white text-xl font-bold", className)}>
			Invoix
		</h1>
	);
}
