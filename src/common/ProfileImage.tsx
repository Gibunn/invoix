export default function ProfileImage({ name }: { name: string }) {
	const nameParts = name.split(" ");
	const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
	const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

	return (
		<span className="size-8 bg-violet-500 rounded-full flex justify-center items-center text-white text-xs font-semibold">
			{firstNameInitial}
			{lastNameInitial}
		</span>
	);
}
