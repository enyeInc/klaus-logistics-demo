import Head from 'next/head';
import React from 'react';

import invoice from '../components/invoice';

const { Invoice } = invoice.components;

const Index = props => (
	<React.Fragment>
		<Head>
			<meta
				content="width=device-width, initial-scale=1.0"
				key="viewport"
				name="viewport"
			/>
		</Head>
		<Invoice {...props} />
	</React.Fragment>
);

export default Index;
