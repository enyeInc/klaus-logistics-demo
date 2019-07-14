import { createSelector } from 'reselect';

/**
 * Creates an array of invoice data.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of invoice data
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const invoiceDataSelector = createSelector(
	state => state.invoice,
	invoiceData => Object.values(invoiceData)
);
