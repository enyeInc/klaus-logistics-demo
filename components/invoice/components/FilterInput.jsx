import { Button, DatePicker, Input, Popover, Select } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import { FILTER_OPTIONS } from '../constants';

const { Option } = Select;
const { RangePicker } = DatePicker;

const FilterInput = props => {
	const {
		filterColumn,
		filterValue,
		getFilterColumn,
		isFitering,
		onDataSourceFilter,
		resetFilters,
	} = props;

	return (
		<div className='filter-container'>
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
				['createdAt', 'dueDate'].includes(filterColumn) ?
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
							shape='circle' size='small'
						/>
					</Popover>
				)
			}
		</div>
	);
};

FilterInput.propTypes = {
	filterColumn: PropTypes.string,
	filterValue: PropTypes.string,
	getFilterColumn: PropTypes.func,
	isFitering: PropTypes.bool,
	onDataSourceFilter: PropTypes.func,
	resetFilters: PropTypes.func,
};

export default FilterInput;
