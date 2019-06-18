import { Layout } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import { FOOTER_TEXT } from '../constants';

const { Footer } = Layout;

const AppFooter = () => (
	<Footer
		className='app-footer'
	>
		{FOOTER_TEXT}
	</Footer>
);

export default AppFooter;
