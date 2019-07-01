import { Breadcrumb, Icon, Layout, LocaleProvider } from 'antd';
import German from 'antd/lib/locale-provider/de_DE';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/de';

import Footer from './Footer';
import Header from './Header';
import invoice from '../../invoice';
import { components as menuComponents } from '../../menu';

moment.locale('de');

const { Menu } = menuComponents;
const { Invoice } = invoice.components;
const { Content, Sider } = Layout;

const AppLayout = props => (
	<LocaleProvider locale={German}>
		<Layout className='app-container'>
			<Sider collapsible>
				<div className="logo" />
				<Menu router={props.router} />
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

AppLayout.defaultProps = {
	children: <Invoice />,
};

AppLayout.propTypes = {
	children: PropTypes.node,
	router: PropTypes.object,
};

export default AppLayout;
