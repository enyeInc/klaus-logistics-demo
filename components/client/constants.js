export const ADD_CLIENT_TEXT = 'Add New Client';

export const COMPONENT_NAME = 'client';

export const FORM_INPUTS = [
	{
		field: 'companyName',
		iconType: 'info-circle',
		placeholder: 'Company Name',
		rules: [{ message: 'You have to input a name', required: true }],
	},
	{
		field: 'address',
		iconType: 'home',
		placeholder: 'Company Address',
		rules: [{ message: 'You have to input an address', required: true }],
	},
	{
		field: 'name',
		iconType: 'user',
		placeholder: 'Contact Name',
		rules: [{ message: 'You have to input a contact name', required: true }],
	},
	{
		field: 'email',
		iconType: 'mail',
		placeholder: 'Contact Email',
		rules: [
			// { message: 'The input is not valid E-mail!', type: 'email' },
			{ message: 'You have to input a contact email', required: true },
		],
	},
	{
		field: 'phone',
		iconType: 'phone',
		placeholder: 'Contact Phone Number',
		rules: [{ message: 'You have to input a valid number', required: true }],
	},
	{
		field: 'notes',
		iconType: 'info-circle',
		placeholder: 'Notes About Company',
		rules: [],
	},
];

export const MODAL_TITLE = 'Create New Client';
