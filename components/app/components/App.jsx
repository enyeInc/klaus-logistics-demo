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

const App = props => (
	<LocaleProvider locale={German}>
		<Layout className='app-container'>
			<Sider collapsible>
				<div className="logo" />
				<Menu />
			</Sider>
			<Layout>
				<Header />
				<Content className='app-content'>
					{props.children}
				</Content>
				<Footer />
			</Layout>
		</Layout>
	</LocaleProvider>
);

App.defaultProps = {
	children: <Invoice />,
};

App.propTypes = {
	children: PropTypes.nodes,
};

export default App;
