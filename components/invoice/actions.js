import * as TYPES from './actionTypes';

/**
 * Triggers request to update invoice data.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.UPDATE_INVOICE_DATA UPDATE_INVOICE_DATA} action.
 */
export const updateInvoiceData = payload => ({
	payload,
	type: TYPES.UPDATE_INVOICE_DATA,
});
