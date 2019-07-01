import { all, put, takeLatest } from 'redux-saga/effects';

import { updateAppData } from './actions';
import { generateFakeData } from '../utils';
import { REQUEST_APP_DATA } from './actionTypes';

/**
 * Generates app data and triggers a reqeust to save to the redux store.
 *
 * @return {void} - void
 */
function* getAppData() {
	try {
		const appData = yield generateFakeData(12);
		yield put(updateAppData({ appData }));
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
