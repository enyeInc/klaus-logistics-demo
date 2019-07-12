import * as TYPES from './actionTypes';
import { generateClientData } from '../utils';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.CREATE_NEW_CLIENT): {
			const newClient = generateClientData(action.payload);

			return {
				...state,
				[newClient.key]: newClient,
			};
		}
		case (TYPES.UPDATE_CLIENT_DATA): {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
