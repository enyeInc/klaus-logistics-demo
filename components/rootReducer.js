import { combineReducers } from 'redux';

import app from './app';
import client from './client';
import invoice from './invoice';
import order from './order';

export default combineReducers({
	app: app.reducers,
	client: client.reducers,
	invoice: invoice.reducers,
	order: order.reducers,
});
