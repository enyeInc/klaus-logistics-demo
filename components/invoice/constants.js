export const COMPONENT_NAME = 'invoice';

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const FILTER_OPTIONS = {
	company: 'Company',
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
		dataIndex: 'company',
		key: 'company',
		title: 'Company',
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
	CENTER: 'center',
	COLUMN_DEFAULT_WIDTH: '14%',
	TEXT: ['Days Over Due', 'Days Until Due', 'Amount Paid'],
};

export const STATUS_FITLERS = [
	{ text: 'Complete', value: 'Complete' },
	{ text: 'Pending', value: 'Pending' },
	{ text: 'Late', value: 'Late' },
];
