import PropTypes from 'prop-types';
import React from 'react';
import { configureStore } from '../../../store';
import { generateFakeData } from '../../../utils';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore (initialState) {
	// Always make a new store if server, otherwise state is shared between requests
	if (isServer) {
		return configureStore(initialState);
	}

	// Create store if unavailable on the client and set it on the window object
	if (!window[__NEXT_REDUX_STORE__]) {
		window[__NEXT_REDUX_STORE__] = configureStore(initialState);
	}

	return window[__NEXT_REDUX_STORE__];
}

export default App => (
	class AppWithRedux extends React.Component {
		static async getInitialProps (appContext) {
			// Get or Create the store with `undefined` as initialState
			// This allows you to set a custom default initialState
			const reduxStore = getOrCreateStore();

			// Provide the store to getInitialProps of pages
			appContext.ctx.reduxStore = reduxStore;

			let appProps = {};

			if (typeof App.getInitialProps === 'function') {
				appProps = await App.getInitialProps(appContext);
			}

			const initialReduxState = reduxStore.getState();

			if(!initialReduxState.invoiceData) {
				initialReduxState.invoiceData = await generateFakeData(12);
			}

			return {
				...appProps,
				initialReduxState,
			};
		}

		constructor (props) {
			super(props);
			this.reduxStore = getOrCreateStore(props.initialReduxState);
		}

		render () {
			return <App {...this.props} reduxStore={this.reduxStore} />;
		}
	}
);
