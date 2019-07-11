import { createSelector } from 'reselect';

import { appDataSelector } from '../app/selectors';

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
//
// /**
//  * Selects the client details fron the application data array
//  *
//  * @function
//  * @param {Object} state - redux store state
//  * @return {Array} a list of client details
//  * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
//  */
// export const invoiceAppDataByIdSelector = createSelector(
// 	appDataSelector,
// 	(state, id) => id,
// 	(appData, id) => appData.map(data => {
// 		const { amount, balance, company, createdAt, createdBy, dueDate, key, status } = data;
//
// 		return { amount, balance, company, createdAt, createdBy, dueDate, key, status };
// 	})
// );
