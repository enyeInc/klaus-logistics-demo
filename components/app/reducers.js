import * as TYPES from './actionTypes';

const initialState = {
	data: null,
};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.UPDATE_APP_DATA): {
			return {
				...state,
				data: action.payload,
			};
		}
		default:
			return state;
	}
};
