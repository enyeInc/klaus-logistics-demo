import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

/**
 * Creates an array of client data. The list is sorted by createdAt.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client details
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const clientDataSelector = createSelector(
	state => state.client,
	clientData => orderBy(
		Object.values(clientData),
		'createdAt',
		['desc']
	)
);

/**
 * Returns a list of orders by client id.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client orders
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const clientOrdersByIdSelector = createSelector(
	state => state.orders,
	(state, id) => id,
	(orderData, id) => orderBy(
		Object.values(clientData),
		'createdAt',
		['desc']
	)
);
