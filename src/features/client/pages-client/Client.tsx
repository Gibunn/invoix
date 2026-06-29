import { useMemo, useState } from "react";
import ClientHeader from "../components-client/client-header/ClientHeader";
import ClientTable from "../components-client/client-table/ClientTable";
import type { Client as ClientType } from "../models-client/model-client";

const MOCK_CLIENTS: ClientType[] = Array.from({ length: 53 }, (_, i) => ({
	id: i + 1,
	name: `Client ${i + 1}`,
	email: `Email ${i + 1}`,
	fullname: `Fullname ${i + 1}`,
	phone_number: `${i + 1}`,
	total_amount: i + 1,
	total_invoices: i + 1,
	total_paid: i + 1,
}));

export default function Client() {
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const paginatedData = useMemo(() => {
		const start = (page - 1) * perPage;
		return MOCK_CLIENTS.slice(start, start + perPage);
	}, [page, perPage]);

	const pagination = useMemo(
		() => ({
			page,
			limit: perPage,
			total: MOCK_CLIENTS.length,
			totalPages: Math.ceil(MOCK_CLIENTS.length / perPage),
		}),
		[page, perPage],
	);

	return (
		<div className="p-5">
			<ClientHeader />
			<ClientTable
				data={paginatedData}
				pagination={{
					pagination,
					paginationState: { page, perPage, setPage, setPerPage },
				}}
			/>
		</div>
	);
}
