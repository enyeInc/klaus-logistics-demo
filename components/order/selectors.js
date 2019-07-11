import { createSelector } from 'reselect';

/**
 * Creates an array of order data.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of order details
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const clientOrderSelector = createSelector(
	state => state.order,
	orderData => Object.values(orderData)
);
