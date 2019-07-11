import * as TYPES from './actionTypes';

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
