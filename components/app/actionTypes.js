import { COMPONENT_NAME } from './constants';

/**
 * Fired by the {@link actions.createNewClient createNewClient}
 * action creator.
 *
 * @type {String}
 */
export const CREATE_NEW_CLIENT = `${COMPONENT_NAME}/CREATE_NEW_CLIENT`;

/**
 * Fired by the {@link actions.requestAppData requestAppData}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_APP_DATA = `${COMPONENT_NAME}/REQUEST_APP_DATA`;

/**
 * Fired by the {@link actions.updateAppData updateAppData}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_APP_DATA = `${COMPONENT_NAME}/UPDATE_APP_DATA`;
