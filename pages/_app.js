import App, { Container } from 'next/app';
import React from 'react';

import { components } from '../components/app';
import { generateFakeData } from '../utils';
const { App: AppLayout } = components;

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }){
		let pageProps = {};

		if (Component.getInitialProps){
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			...pageProps,
			invoiceData: generateFakeData(12),
		};
	}

	render() {
		const { Component, router, ...pageProps } = this.props;

		return (
			<AppLayout router={router}>
				<Component {...pageProps} />
			</AppLayout>
		);
	}
};
