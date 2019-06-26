import React from 'react';

import { components as appComponents } from '../components/app';
import { components as invoiceComponents } from '../components/invoice';

const { App } = appComponents;
const { Invoice } = invoiceComponents;

const InvoiceAppWrapper = props => (
	<App>
		<Invoice />
	</App>
);

export default InvoiceAppWrapper;
