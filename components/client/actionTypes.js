import { COMPONENT_NAME } from './constants';

/**
 * Fired by the {@link actions.createNewClient createNewClient}
 * action creator.
 *
 * @type {String}
 */
export const CREATE_NEW_CLIENT = `${COMPONENT_NAME}/CREATE_NEW_CLIENT`;

/**
 * Fired by the {@link actions.updateClientData updateClientData}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_CLIENT_DATA = `${COMPONENT_NAME}:UPDATE_CLIENT_DATA`;
