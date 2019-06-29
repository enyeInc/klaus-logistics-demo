import { createSelector } from 'reselect';

import { invoiceDataSelector } from '../invoice/selectors';

/**
 * Selects the client details fron the invoice data array
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client details
 * {@link module:invoice/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getClientDetailsSelector = createSelector(
	invoiceDataSelector,
	invoiceData => invoiceData.map(data => {
		const { client, description, href, image, slogan } = data;

		return { client, description, href, image, slogan };
	})
);
