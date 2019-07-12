import * as TYPES from './actionTypes';

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
	type: TYPES.CREATE_NEW_CLIENT,
});

/**
 * Triggers request to update client data.
 *
 * @function
 *
 * @param {Object} payload - data passed into the action creator, to be consumed
 * by reducer or saga
 * @return {Object} The {@link actionTypes.UPDATE_CLIENT_DATA UPDATE_CLIENT_DATA} action.
 */
export const updateClientData = payload => ({
	payload,
	type: TYPES.UPDATE_CLIENT_DATA,
});
