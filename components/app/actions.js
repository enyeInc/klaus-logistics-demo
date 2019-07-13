import * as TYPES from './actionTypes';

/**
 * Triggers request for application level data.
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_APP_DATA REQUEST_APP_DATA} action.
 */
export const requestAppData = () => ({ type: TYPES.REQUEST_APP_DATA });

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
	type: TYPES.UPDATE_APP_DATA,
});
