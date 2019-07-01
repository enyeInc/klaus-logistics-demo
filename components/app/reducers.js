import { createFakeClient } from '../utils';
import { CREATE_NEW_CLIENT, UPDATE_APP_DATA } from './actionTypes';

const initialState = {};

function createClient(data) {
	return data;
}

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case(CREATE_NEW_CLIENT): {
			const { invoiceData } = state;
			const newClient = createClient(action.payload);

			console.log(newClient);

			return {
				...state,
				// invoiceData: [newClient, ...invoiceData],
			};
		}

		case(UPDATE_APP_DATA): {
			const { appData } = action.payload;

			return {
				...state,
				appData,
			};
		}

		default:
			return state;
	}
};
