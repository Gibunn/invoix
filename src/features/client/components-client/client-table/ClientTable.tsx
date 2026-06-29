import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import TablePagination, {
	type TablePaginationProps,
} from "@/common/TablePagination";
import type { Client } from "../../models-client/model-client";
import { clientColumns } from "./client-table-config";

export default function ClientTable({
	data,
	pagination,
}: {
	data: Client[];
	pagination: TablePaginationProps;
}) {
	const table = useReactTable({
		data,
		columns: clientColumns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="w-full overflow-auto h-[70vh] rounded-t-2xl">
			<table className="w-full">
				<thead className="bg-violet-100 sticky top-0">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="border-b border-gray-100">
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										className={`text-xs font-medium text-[#6B6B80] px-5 py-4
											${header.id === "fullname" && "text-left"}
											${header.id === "email" && "text-left"}
											${header.id === "phone_number" && "text-left"}
											${header.id === "total_amount" && "text-right"}
										`}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className="border-b border-gray-50 hover:bg-gray-50 bg-white cursor-pointer transition-colors text-[#6B6B80]"
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className={`px-5 py-4 text-sm
									${cell.column.id === "total_invoices" && "text-center"}
								`}
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<TablePagination
				pagination={pagination.pagination}
				paginationState={pagination.paginationState}
			/>
		</div>
	);
}
