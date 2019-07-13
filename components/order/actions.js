import * as TYPES from './actionTypes';

/**
 * Triggers request to add a new order to the redux state.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.CREATE_NEW_CLIENT CREATE_NEW_CLIENT} action.
 */
export const createNewOrder = payload => ({
	payload,
	type: TYPES.CREATE_NEW_ORDER,
});

/**
 * Toggles the approval status of an order.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.CREATE_NEW_CLIENT CREATE_NEW_CLIENT} action.
 */
export const toggleOrderApproval = payload => ({
	payload,
	type: TYPES.TOGGLE_ORDER_APPROVAL,
});

/**
 * Triggers request to update order data.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.UPDATE_ORDER_DATA UPDATE_ORDER_DATA} action.
 */
export const updateOrderData = payload => ({
	payload,
	type: TYPES.UPDATE_ORDER_DATA,
});
