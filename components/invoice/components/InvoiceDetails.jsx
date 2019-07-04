import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker, Input, Popover, Select } from 'antd';

import { FILTER_OPTIONS } from '../constants';

const InvoiceDetails = props => {
	const { record } = props;

	return (
		<div className='invoice-details-container'>

		</div>
	);
};

InvoiceDetails.propTypes = {
	record: PropTypes.object,
};

export default InvoiceDetails;
