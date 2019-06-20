import uuid from 'uuid';

export const INVOICE_DATA = [
	{
		amount: '€ 1000',
		balance: '€ 1000',
		client: 'Doe GMBH',
		createdAt: new Date(),
		createdBy: 'Tim Hofmann',
		dueDate: new Date(),
		key: uuid(),
		status: {
			color: '#f50',
			value: 'Late',
		}, // pending, complete, late
	},
	{
		amount: '€ 500',
		balance: '€ 0',
		client: 'Doe GMBH',
		createdAt: new Date(),
		createdBy: 'Tim Hofmann',
		dueDate: new Date(),
		key: uuid(),
		status: {
			color: '#87d068',
			value: 'Complete',
		},
	},
	{
		amount: '€ 500',
		balance: '€ 500',
		client: 'Doe GMBH',
		createdAt: new Date(),
		createdBy: 'Tim Hofmann',
		dueDate: new Date(),
		key: uuid(),
		status: {
			color: '#2db7f5',
			value: 'Pending',
		},
	},
];

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

export const HIGH_LIGHTER_STYLE = {
	backgroundColor: '#ffc069',
	padding: 0,
};

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const STATUS_FITLERS = [
	{ text: 'Complete', value: 'Complete' },
	{ text: 'Pending', value: 'Pending' },
	{ text: 'Late', value: 'Late' },
];
