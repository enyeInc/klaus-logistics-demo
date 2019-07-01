import { createFakeClient, createOrderData } from '../utils';
import * as TYPES from './actionTypes';

const initialState = {};

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case (TYPES.CREATE_NEW_CLIENT): {
			const newClient = createFakeClient(null, action.payload);

			return {
				...state,
				appData: [newClient, ...state.appData],
			};
		}
		case (TYPES.CREATE_NEW_ORDER): {
			const { orderData } = state;
			const newOrder = createOrderData(action.payload);

			return {
				...state,
				orderData: {
					[newOrder.id]: newOrder,
					...state.orderData,
				},
			};
		}
		case (TYPES.TOGGLE_ORDER_APPROVAL): {
			const { orderData } = state;
			const newOrder = createOrderData(action.payload);

			return {
				...state,
				orderData: [newOrder, ...orderData],
			};
		}
		case (TYPES.UPDATE_APP_DATA): {
			const { appData = {}, invoiceData = {}, orderData = {} } = action.payload;

			return {
				...state,
				appData,
				invoiceData,
				orderData,
			};
		}

		default:
			return state;
	}
};
