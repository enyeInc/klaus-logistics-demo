import { createFakeClient } from '../utils';
import { CREATE_NEW_CLIENT, UPDATE_APP_DATA } from './actionTypes';

const initialState = {};

function createClient(data) {

	return data;
}

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case(CREATE_NEW_CLIENT): {
			const { appData } = state;
			const newClient = createFakeClient(null, action.payload);

			console.log(action.payload, newClient);

			return {
				...state,
				appData: [newClient, ...appData],
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
