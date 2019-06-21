import uuid from 'uuid';

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const INVOICE_COLUMNS = [
	{
		dataIndex: 'status',
		key: 'status',
		title: 'Status',
	},
	{
		dataIndex: 'client',
		key: 'client',
		title: 'Client',
	},
	{
		dataIndex: 'amount',
		key: 'amount',
		title: 'Amount',
	},
	{
		dataIndex: 'balance',
		key: 'balance',
		title: 'Balance',
	},
	{
		dataIndex: 'dueDate',
		key: 'dueDate',
		title: 'Due Date',
	},
	{
		dataIndex: 'createdAt',
		key: 'createdAt',
		title: 'Created Date',
	},
	{
		dataIndex: 'createdBy',
		key: 'createdBy',
		title: 'Created By',
	},
];

export const STATUS_FITLERS = [
	{ text: 'Complete', value: 'Complete' },
	{ text: 'Pending', value: 'Pending' },
	{ text: 'Late', value: 'Late' },
];
