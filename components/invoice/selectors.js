import { COMPONENT_NAME } from './constants';

/**
 * Selects the <tt>invoiceData</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Array} the client invoice data
 * {@link module:invoice/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const invoiceDataSelector = state => state[COMPONENT_NAME].invoiceData;
