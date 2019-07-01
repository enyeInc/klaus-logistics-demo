import { createSelector } from 'reselect';

import { appDataSelector } from '../app/selectors';

/**
 * Selects the client details fron the application data array
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client details
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const invoiceDataSelector = createSelector(
	appDataSelector,
	appData => appData.map(data => {
		const { amount, balance, company, createdAt, createdBy, dueDate, key, status } = data;

		return { amount, balance, company, createdAt, createdBy, dueDate, key, status };
	})
);
