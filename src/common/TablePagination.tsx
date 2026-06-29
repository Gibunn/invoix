import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TablePaginationProps {
	paginationState: {
		page: number;
		setPage: (p: number) => void;
		perPage: number;
		setPerPage: (pp: number) => void;
	};
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}

function getPageWindow(currentPage: number, totalPages: number): number[] {
	const windowSize = 3;
	let start = currentPage - 1;
	if (start < 1) start = 1;
	if (start + windowSize - 1 > totalPages) {
		start = Math.max(1, totalPages - windowSize + 1);
	}
	return Array.from(
		{ length: Math.min(windowSize, totalPages) },
		(_, i) => start + i,
	);
}

export default function TablePagination({
	pagination,
	paginationState,
}: TablePaginationProps) {
	const from = (pagination.page - 1) * pagination.limit + 1;
	const to = Math.min(pagination.page * pagination.limit, pagination.total);
	const pages = getPageWindow(pagination.page, pagination.totalPages);

	return (
		<div className="px-5 py-3 bg-white rounded-b-2xl flex items-center justify-between sticky bottom-0">
			<div className="flex gap-3 items-center">
				<span className="text-xs text-[#6B6B80]">
					{from}–{to} dari {pagination.total}
				</span>

				<div className="flex gap-1.5 items-center text-xs">
					<span className="text-xs text-[#6B6B80]">Perhalaman</span>
					<select
						onChange={(e) => {
							paginationState.setPerPage(Number(e.target.value));
							paginationState.setPage(1);
						}}
						value={paginationState.perPage}
						className="px-2 py-1 outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5 rounded-[10px] cursor-pointer hover:bg-zinc-950/5"
					>
						{[10, 25, 50].map((n) => (
							<option key={n} value={n}>
								{n}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="flex items-center gap-1">
				<button
					type="button"
					disabled={pagination.page === 1}
					onClick={() => paginationState.setPage(paginationState.page - 1)}
					className="cursor-pointer hover:bg-zinc-950/5 p-2.5 rounded-[10px]"
				>
					<ChevronLeft color="#0C0C12" size={16} />
				</button>

				{pages.map((p) => (
					<button
						key={p}
						type="button"
						onClick={() => paginationState.setPage(p)}
						className={`size-7 flex items-center justify-center rounded-[10px] font-medium text-xs cursor-pointer transition-colors
              ${
						p === pagination.page
							? "bg-violet-700 text-white"
							: "text-[#0C0C12] hover:bg-zinc-950/5"
}`}
					>
						{p}
					</button>
				))}

				<button
					type="button"
					disabled={pagination.page === pagination.totalPages}
					onClick={() => paginationState.setPage(paginationState.page + 1)}
					className="cursor-pointer hover:bg-zinc-950/5 p-2.5 rounded-[10px]"
				>
					<ChevronRight color="#0C0C12" size={16} />
				</button>
			</div>
		</div>
	);
}
