import * as TYPES from './actionTypes';
import { generateOrderData } from '../utils';

const initialState = {
	data: null,
};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.CREATE_NEW_ORDER): {
			const { orderData } = state;
			const newOrder = generateOrderData(action.payload);

			return {
				...state,
				orderData: {
					[newOrder.id]: newOrder,
					...state.orderData,
				},
			};
		}
		case (TYPES.TOGGLE_ORDER_APPROVAL): {
			const { approved, id } = action.payload;
			const { orderData } = state;
			const item = orderData[id];

			return {
				...state,
				orderData: {
					...orderData,
					[id]: { ...item, approved },
				},
			};
		}
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
