export const COMPONENT_NAME = 'invoice';

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const FILTER_OPTIONS = {
	company: 'Company',
	createdAt: 'Created Date',
	dueDate: 'Due Date',
};

export const INVOICE_COLUMNS = [
	{
		dataIndex: 'approved',
		key: 'approved',
		title: 'Approved',
	},
	{
		dataIndex: 'company',
		key: 'company',
		title: 'Company',
	},
	{
		dataIndex: 'price',
		key: 'price',
		title: 'Total Price',
	},
	{
		dataIndex: 'driver',
		key: 'driver',
		title: 'Assigned Driver',
	},
	{
		dataIndex: 'pickUp',
		key: 'pickUp',
		title: 'Pick Up Location',
	},
	{
		dataIndex: 'dropOff',
		key: 'dropOff',
		title: 'Drop Off Location',
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
