import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, DatePicker, Input, Popover, Progress, Select } from 'antd';
import { connect } from 'react-redux';

import { FILTER_OPTIONS, SETTINGS } from '../constants';

const [DAYS_OVER_DUE, DAYS_UNTIL_DUE, AMOUNT_PAID] = SETTINGS.TEXT;

const InvoiceDetails = props => {
	const { amount, balance, dueDate, status } = props.record;
	let amountPaid = !balance ? 100 : 0;
	let days = 0;

	if (status.value === 'Late') {
		const given = moment(dueDate).startOf('day');
		const current = moment().endOf('day');
		days = moment.duration(current.diff(given)).asDays();
		amountPaid = Math.floor((balance * 100) / amount);
	} else if (status.value === 'Pending') {
		const given = moment(dueDate).startOf('day');
		const current = moment().endOf('day');
		days = moment.duration(given.diff(current)).asDays();
	}

	return (
		<div className='invoice-details-container'>
			<div className='progress'>
				<Progress
					type='circle'
					percent={Math.ceil(days)}
					width={200}
					status={status.value === 'Late' ? 'exception' : 'normal'}
					format={percent => `${percent} Days`}
				/>
				<span>{status.value === 'Pending' ? DAYS_UNTIL_DUE : DAYS_OVER_DUE}</span>
			</div>
			<div className='progress'>
				<Progress
					type='circle'
					percent={amountPaid}
					width={200}
				/>
				<span>{AMOUNT_PAID}</span>
			</div>

		</div>
	);
};

InvoiceDetails.propTypes = {
	record: PropTypes.object,
};

export default InvoiceDetails;
