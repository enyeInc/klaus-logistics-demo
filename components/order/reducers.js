import * as TYPES from './actionTypes';
import { generateOrderData } from '../utils';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.CREATE_NEW_ORDER): {
			console.log(action.payload);
			const newOrder = generateOrderData(action.payload);
			console.log(newOrder);

			return {
				...state,
				[newOrder.key]: newOrder,
			};
		}
		case (TYPES.TOGGLE_ORDER_APPROVAL): {
			const { approved, id } = action.payload;
			const item = state[id];

			return {
				...state,
				[id]: { ...item, approved },
			};
		}
		case (TYPES.UPDATE_ORDER_DATA): {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
