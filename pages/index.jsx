import Head from 'next/head';
import React from 'react';

import invoice from '../components/invoice';

const { Invoice } = invoice.components;

const Index = props => <Invoice {...props} />;

export default Index;
