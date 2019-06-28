import { REQUEST_INVOICE_DATA } from './actionTypes';

/**
 * Triggers request for invoice data.
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_INVOICE_DATA REQUEST_INVOICE_DATA} action.
 */
export const requestInvoiceData = () => ({ type: REQUEST_INVOICE_DATA });

/**
 * Sets invoice data in redux store.
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_INVOICE_DATA UPDATE_INVOICE_DATA} action.
 */
export const updateInvoiceData = payload => ({
	payload,
	type: UPDATE_INVOICE_DATA,
});
