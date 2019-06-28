import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider } from 'react-redux';

import { configureStore } from '../store';
import { components } from '../components/app';

const { AppLayout } = components;

class MyApp extends App {
	static async getInitialProps ({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		return { pageProps };
	}

	render() {
		const { Component, router, store, ...pageProps } = this.props;

		return (
			<Container>
			  	<Provider store={store}>
					<AppLayout router={router}>
						<Component {...pageProps} />
					</AppLayout>
			  	</Provider>
			</Container>
		);
	}
};

export default withRedux(configureStore)(withReduxSaga(MyApp));
