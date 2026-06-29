import { createColumnHelper } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import ProfileImage from "@/common/ProfileImage";
import { formatRupiah } from "@/utils/formatRupiah";
import type { Client } from "../../models-client/model-client";

const clientColumnHelper = createColumnHelper<Client>();

export const clientColumns = [
	clientColumnHelper.accessor("fullname", {
		header: "NAMA",
		cell: ({ row: { original } }) => (
			<div className="flex gap-3 items-center">
				<ProfileImage
					name={original.fullname}
					className="bg-[#EDE9FE] text-[#7008E7]"
				/>
				<span className="text-black font-semibold">
					{original.fullname}
				</span>
			</div>
		),
	}),
	clientColumnHelper.accessor("email", {
		header: "EMAIL",
		cell: ({ row: { original } }) => original.email,
	}),
	clientColumnHelper.accessor("phone_number", {
		header: "TELEPON",
		cell: ({ row: { original } }) => original.phone_number,
	}),
	clientColumnHelper.accessor("total_invoices", {
		header: "INVOICE",
		cell: ({ row: { original } }) => (
			<span className="text-black font-semibold">
				{original.total_invoices}
			</span>
		),
	}),
	clientColumnHelper.accessor("total_amount", {
		header: "TOTAL NILAI",
		cell: ({ row: { original } }) => (
			<div className="flex flex-col items-end">
				<span className="text-black font-semibold">
					{formatRupiah(original.total_amount)}
				</span>
				<span className="text-[#009966] text-xs">
					{formatRupiah(original.total_paid)} lunas
				</span>
			</div>
		),
	}),
	clientColumnHelper.accessor("more", {
		header: "",
		cell: () => (
			<button type="button" className="cursor-pointer">
				<MoreHorizontal size={16} />
			</button>
		),
	}),
];
