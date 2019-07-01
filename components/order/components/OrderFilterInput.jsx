import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker, Input, Popover, Select } from 'antd';
import { connect } from 'react-redux';

import { ADD_NEW_ORDERS, FILTER_OPTIONS } from '../constants';

const { Option } = Select;
const { RangePicker } = DatePicker;

const OrderFilterInput = props => {
	const {
		filterColumn,
		filterValue,
		getFilterColumn,
		isFitering,
		onDataSourceFilter,
		resetFilters,
		toggleModal,
	} = props;

	return (
		<div className='order-filter-container'>
			<div className= 'order-filter-input-close'>
				<Select onChange={getFilterColumn} value={filterColumn}>
					{
						Object.entries(FILTER_OPTIONS).map(option => {
							const [value, text] = option;

							return (
								<Option
									key={value}
									value={value}
								>
									{text}
								</Option>
							);
						})
					}
				</Select>
				{
					['createdAt'].includes(filterColumn) ?
						<RangePicker
							allowClear={false}
							showTime={{ format: 'HH:mm' }}
							format="YYYY-MM-DD HH:mm"
							placeholder={['Start Time', 'End Time']}
							onOk={onDataSourceFilter}
						/> :
						<Input
							onChange={onDataSourceFilter}
							placeholder={`Filter ${FILTER_OPTIONS[filterColumn]}`}
							value={filterValue}
						></Input>
				}
				{
					isFitering && (
						<Popover content='Reset Filters'>
							<Button
								icon='close'
								onClick={resetFilters}
								shape='circle'
								size='small'
							/>
						</Popover>
					)
				}
			</div>
			<Button
				icon='plus-circle'
				type='primary'
				onClick={toggleModal}
			>
				{ADD_NEW_ORDERS}
			</Button>
		</div>
	);
};

OrderFilterInput.propTypes = {
	filterColumn: PropTypes.string,
	filterValue: PropTypes.string,
	getFilterColumn: PropTypes.func,
	isFitering: PropTypes.bool,
	onDataSourceFilter: PropTypes.func,
	resetFilters: PropTypes.func,
	toggleModal: PropTypes.func,
};

export default connect()(OrderFilterInput);
