import { COMPONENT_NAME } from './constants';

/**
 * Fired by the {@link actions.createNewOrder createNewOrder}
 * action creator.
 *
 * @type {String}
 */
export const CREATE_NEW_ORDER = `${COMPONENT_NAME}/CREATE_NEW_ORDER`;

/**
 * Fired by the {@link actions.toggleOrderApproval toggleOrderApproval}
 * action creator.
 *
 * @type {String}
 */
export const TOGGLE_ORDER_APPROVAL = `${COMPONENT_NAME}/TOGGLE_ORDER_APPROVAL`;

/**
 * Fired by the {@link actions.updateOrderData updateOrderData}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_ORDER_DATA = `${COMPONENT_NAME}:UPDATE_ORDER_DATA`;
