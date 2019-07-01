import { CREATE_NEW_CLIENT, REQUEST_APP_DATA, UPDATE_APP_DATA } from './actionTypes';

/**
 * Triggers request to add a new client to the redux state.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.CREATE_NEW_CLIENT CREATE_NEW_CLIENT} action.
 */
export const createNewClient = payload => ({
	payload,
	type: CREATE_NEW_CLIENT,
});

/**
 * Triggers request for application level data.
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_APP_DATA REQUEST_APP_DATA} action.
 */
export const requestAppData = () => ({ type: REQUEST_APP_DATA });

/**
 * Sets app data in redux store.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action, to be consumed by reducer or saga
 * @return {Object} The {@link actionTypes.UPDATE_APP_DATA UPDATE_APP_DATA} action.
 */
export const updateAppData = payload => ({
	payload,
	type: UPDATE_APP_DATA,
});
