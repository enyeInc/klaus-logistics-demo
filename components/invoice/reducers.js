import { UPDATE_INVOICE_DATA } from './actionTypes';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case(UPDATE_INVOICE_DATA): {
			const { invoiceData } = action.payload;

			return {
				...state,
				invoiceData,
			};
		}
		
		default:
			return state;
	}
};
