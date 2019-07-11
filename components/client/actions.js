import * as TYPES from './actionTypes';

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
