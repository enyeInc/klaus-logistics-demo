import { createSelector } from 'reselect';

/**
 * Creates an array of client data.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} a list of client details
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const clientDataSelector = createSelector(
	state => state.client,
	clientData => Object.values(clientData)
);
