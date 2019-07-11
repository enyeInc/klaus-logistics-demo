import { all, put, takeLatest } from 'redux-saga/effects';

import { updateAppData } from './actions';
import { updateClientData } from '../client/actions';
import { updateInvoiceData } from '../invoice/actions';
import { updateOrderData } from '../order/actions';
import { generateFakeData } from '../utils';
import { REQUEST_APP_DATA } from './actionTypes';

/**
 * Generates app data and triggers a reqeust to save to the redux store.
 *
 * @return {void} - void
 */
function* getAppData() {
	try {
		const {
			appData = {},
			clientData = {},
			invoiceData = {},
			orderData = {},
		} = yield generateFakeData(12);

		yield put(updateAppData(appData));
		yield put(updateClientData(clientData));
		yield put(updateInvoiceData(invoiceData));
		yield put(updateOrderData(orderData));
	} catch(error) {
	    console.log(error);
	}
}
/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_APP_DATA REQUEST_APP_DATA} action.
 * Triggers request to get application level data.
 *
 * @return {void} - void
 */
function* watchGetAppData() {
	try {
	    yield takeLatest(REQUEST_APP_DATA, getAppData);
	} catch(error) {
	    console.log(error);
	}
}

export default function* () {
	yield all([
    	watchGetAppData(),
	]);
}
