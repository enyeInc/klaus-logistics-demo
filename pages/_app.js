import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { components } from '../components/app';

const { AppLayout, AppWithRedux } = components;

class MyApp extends App {
	render() {
		const { Component, router, reduxStore, ...pageProps } = this.props;

		return (
			<Container>
			  	<Provider store={reduxStore}>
					<AppLayout router={router}>
						<Component {...pageProps} />
					</AppLayout>
			  	</Provider>
			</Container>
		);
	}
};

export default AppWithRedux(MyApp);
