import { Button, DatePicker, Input, Popover, Select, Table, Tag } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import {
	DEFAULT_DATA_FORMAT,
	FILTER_OPTIONS,
	INVOICE_COLUMNS,
	STATUS_FITLERS
} from '../constants';
import { generateFakeData } from '../utils';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default class Invoice extends React.Component {
	state = {
		dataSource: [],
		filterColumn: 'client',
		filterValue: '',
		filteredDataSource: [],
		filteredInfo: {},
		isFitering: false,
	}

	handleChange = (pagination, filters, sorter) => {
		this.setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	};

	getFilterColumn = filterColumn => {
		this.setState({ filterColumn });
	}

	resetFilters = () => {
		this.setState({
			filterColumn: 'client',
			filterValue: '',
			filteredDataSource: [],
			isFitering: false,
		});
	}

	onDataSourceFilter = event => {
		const { dataSource, filterColumn: column } = this.state;
		let filterValue;
		let isFitering = true;

		if (column === 'client') {
			const { value: newfilterValue } = event.target;
			isFitering = !!newfilterValue;
			filterValue = newfilterValue;
		}

		const filteredDataSource = dataSource.filter(data => {
			const value = data[column];

			if (['createdAt', 'dueDate'].includes(column)) {
				const [date1, date2] = event;
				return moment(value).isBetween(date1, date2);
			}

			return value.toLowerCase().includes(filterValue.toLowerCase());
		});

		this.setState({ filterValue, filteredDataSource, isFitering });
	}

	generateColumns() {
		const { filteredInfo } = this.state;

		return INVOICE_COLUMNS.map(column => {
			const { key } = column;

			return ({
				...column,
				align: 'center',
				filteredValue: filteredInfo[key] || null,
				filters: key === 'status' ? STATUS_FITLERS : [],
				onFilter: (filterVal, record) => {
					const { key } = column;
					return record[key].value === filterVal;
				},
				render: data => {
					let content = '';

					switch (key) {
						case 'status': {
							const { color, value } = data;
							content = <Tag color={color}>{value}</Tag>;
							break;
						}
						case 'createdAt':
						case 'dueDate':
							content = moment(data).format(DEFAULT_DATA_FORMAT);
							break;
						case 'amount':
						case 'balance':
							content = `€ ${data}`;
							break;
						default:
							content = data;
					}
					return content;
				},
				sorter: (itemA, itemB) => {
					const value1 = itemA[key].value || itemA[key];
					const value2 = itemB[key].value || itemB[key];

					if (value1 < value2) {
						return -1;
					} else if (value1 > value2) {
						return 1;
					} else {
						return 0;
					}
					return value1 < value2;
				},
				width: '12%',
			});
		});
	}

	componentDidMount() {
		this.setState({
			dataSource: generateFakeData(20),
		});
	}

	render() {
		const columns = this.generateColumns();
		const {
			dataSource,
			filterColumn,
			filterValue,
			filteredDataSource,
			isFitering,
		} = this.state;
		const source = isFitering ? filteredDataSource : dataSource;

		return(
			<div className='invoice-container'>
				<div className='filter-container'>
					<Select onChange={this.getFilterColumn} value={filterColumn}>
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
								onOk={this.onDataSourceFilter}
							/> :
							<Input
								onChange={this.onDataSourceFilter}
								placeholder={`Filter ${FILTER_OPTIONS[filterColumn]}`}
								value={filterValue}
							></Input>
					}
					{
						isFitering && (
							<Popover content='Reset Filters'>
								<Button
									icon='close'
									onClick={this.resetFilters}
									shape='circle' size='small'
								/>
							</Popover>
						)
					}
				</div>
				<Table
					columns={columns}
					dataSource={source}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
