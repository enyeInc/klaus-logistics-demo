import { COMPONENT_NAME } from './constants';

/**
 * Selects the <tt>appData</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} the client invoice data
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const appDataSelector = state => state[COMPONENT_NAME].appData;

/**
 * Selects the <tt>orderData</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} the client invoice data
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const orderDataSelector = state => state[COMPONENT_NAME].orderData;
