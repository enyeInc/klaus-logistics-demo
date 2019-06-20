import { Breadcrumb, Icon, Layout, LocaleProvider } from 'antd';
import German from 'antd/lib/locale-provider/de_DE';
import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import { components as menuComponents } from '../../menu';
import { components as invoiceComponents } from '../../invoice';

const { Menu } = menuComponents;
const { Invoice } = invoiceComponents;
const { Content, Sider } = Layout;

const App = () => (
	<LocaleProvider locale={German}>
		<Layout className='app-container'>
			<Sider collapsible>
				<div className="logo" />
				<Menu />
			</Sider>
			<Layout>
				<Header />
				<Content className='app-content'>
					<Invoice />
				</Content>
				<Footer />
			</Layout>
		</Layout>
	</LocaleProvider>
);

export default App;
