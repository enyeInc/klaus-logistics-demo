import orderBy from 'lodash.orderby';
import { createSelector } from 'reselect';

import { clientOrderSelector } from '../order/selectors';

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
 * Returns a list of invoices by client id. Given the nature of our faked datas,
 * there is only a max of one invoice per client.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client orders
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const clientInvoicesByIdSelector = createSelector(
	state => state.invoice,
	(state, id) => id,
	(orderData, id) => orderData[id] ? [orderData[id]] : []
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
	clientOrderSelector,
	(state, id) => id,
	(orderData, id) => orderData.filter(order => order.clientId === id)
);
