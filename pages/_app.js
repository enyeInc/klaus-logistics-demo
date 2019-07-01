import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider } from 'react-redux';

import { configureStore } from '../store';
import app from '../components/app';
import invoice from '../components/invoice';

const { AppLayout } = app.components;
const { requestAppData } = app.actions;

//TODO: localize the application
// https://medium.com/@isaachinman/creating-localised-nextjs-apps-with-next-i18next-f01d5e610307

class MyApp extends App {
	static async getInitialProps ({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		const state = ctx.store.getState();

		if (!state.app.appData) {
			await ctx.store.dispatch(requestAppData());
		}

		return { pageProps };
	}

	render() {
		const { Component, router, store, ...pageProps } = this.props;

		return (
			<Container>
				<Head>
					<meta
						content="width=device-width, initial-scale=1.0"
						key="viewport"
						name="viewport"
					/>
				</Head>
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
