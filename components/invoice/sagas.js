import { all, put } from 'redux-saga/effects';

import { updateInvoiceData } from './actions';
import { generateFakeData } from '../../utils';
import { REQUEST_INVOICE_DATA } from './actionTypes';

/**
 * Generates invoice data and triggers a reqeust to save to the redux store.
 *
 * @return {void} - void
 */
function* getInvoiceData() {
	console.log('WE ARE IN THIS SAGA');
	try {
		const invoiceData = yield generateFakeData(12);
		yield put(updateInvoiceData({ invoiceData }));
	} catch(error) {
	    console.log(error);
	}
}
/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_INVOICE_DATA REQUEST_INVOICE_DATA} action.
 * Triggers request to get clients invoice data.
 *
 * @return {void} - void
 */
function* watchGetInvoiceData() {
	try {
	    yield effects.takeLatest(REQUEST_INVOICE_DATA, getInvoiceData);
	} catch(error) {
	    console.log(error);
	}
}

export default function* () {
	yield all([
    	watchGetInvoiceData(),
	]);
}
