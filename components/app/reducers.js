import { generateClientData, generateOrderData } from '../utils';
import * as TYPES from './actionTypes';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.CREATE_NEW_CLIENT): {
			const newClient = generateClientData(null, action.payload);

			return {
				...state,
				appData: [newClient, ...state.appData],
			};
		}
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
			const { clientData = {}, invoiceData = {}, orderData = {} } = action.payload;

			return {
				...state,
				clientData,
				invoiceData,
				orderData,
			};
		}

		default:
			return state;
	}
};
