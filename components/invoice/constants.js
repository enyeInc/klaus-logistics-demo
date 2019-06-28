export const COMPONENT_NAME = 'invoice';

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const FILTER_OPTIONS = {
	client: 'Client',
	createdAt: 'Created Date',
	dueDate: 'Due Date',
};

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

export const SETTINGS = {
	COLUMN_DEFAULT_WIDTH: '12%',
};

export const STATUS_FITLERS = [
	{ text: 'Complete', value: 'Complete' },
	{ text: 'Pending', value: 'Pending' },
	{ text: 'Late', value: 'Late' },
];
