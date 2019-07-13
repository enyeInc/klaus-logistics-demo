import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageHeader } from 'antd';

import { HEADER_TEXT } from '../constants';

const { Header } = Layout;

const AppHeader = () => (
	<Header className='app-header'>
		<PageHeader title={HEADER_TEXT} />
	</Header>
);

export default AppHeader;
