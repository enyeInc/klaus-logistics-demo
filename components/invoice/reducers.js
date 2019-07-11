import * as TYPES from './actionTypes';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.UPDATE_INVOICE_DATA): {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
