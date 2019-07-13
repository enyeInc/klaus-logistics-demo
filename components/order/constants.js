export const COMPONENT_NAME = 'order';

export const DEFAULT_DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const ADD_NEW_ORDERS = 'Add New Orders';

export const FILTER_OPTIONS = {
	company: 'Company',
	createdAt: 'Created Date',
	dropOff: 'Drop off Location',
	pickUp: 'Pick Up Location',
};

export const FORM_INPUTS = [
	{
		field: 'companyName',
		iconType: 'info-circle',
		placeholder: 'Company Name',
		rules: [{ message: 'You have to input a company name', required: true }],
	},
	{
		field: 'price',
		iconType: 'dollar',
		placeholder: 'Total Price',
		rules: [{ message: 'You have to input a price', required: true }],
	},
	{
		field: 'driver',
		iconType: 'car',
		placeholder: 'Assigned Driver',
		rules: [{ message: 'You have assign a driver', required: true }],
	},
	{
		field: 'pickUp',
		iconType: 'up-square',
		placeholder: 'Pick Up Location',
		rules: [
			{ message: 'You have to input a pick up location', required: true },
		],
	},
	{
		field: 'dropOff',
		iconType: 'down-square',
		placeholder: 'Drop Off Location',
		rules: [{ message: 'You have to input a drop off location', required: true }],
	},
];

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

export const MODAL_TITLE = 'Add New Orders';

export const SETTINGS = {
	CENTER: 'center',
	COLUMN_DEFAULT_WIDTH: '12%',
};
