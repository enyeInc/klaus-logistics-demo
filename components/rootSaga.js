import { all } from 'redux-saga/effects';

import invoice from './invoice';

export default function* rootSaga(){
	yield all([
		invoice.sagas(),
	]);
}
