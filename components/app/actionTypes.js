import { COMPONENT_NAME } from './constants';

/**
 * Fired by the {@link actions.createNewOrder createNewOrder}
 * action creator.
 *
 * @type {String}
 */
export const CREATE_NEW_ORDER = `${COMPONENT_NAME}/CREATE_NEW_ORDER`;

/**
 * Fired by the {@link actions.requestAppData requestAppData}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_APP_DATA = `${COMPONENT_NAME}/REQUEST_APP_DATA`;

/**
 * Fired by the {@link actions.toggleOrderApproval toggleOrderApproval}
 * action creator.
 *
 * @type {String}
 */
export const TOGGLE_ORDER_APPROVAL = `${COMPONENT_NAME}/TOGGLE_ORDER_APPROVAL`;

/**
 * Fired by the {@link actions.updateAppData updateAppData}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_APP_DATA = `${COMPONENT_NAME}/UPDATE_APP_DATA`;
