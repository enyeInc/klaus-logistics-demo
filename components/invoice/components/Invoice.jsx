import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';

import FilterInput from './FilterInput';
import { invoiceDataSelector } from '../selectors';

import {
	COMPONENT_NAME,
	DEFAULT_DATA_FORMAT,
	INVOICE_COLUMNS,
	STATUS_FITLERS,
	SETTINGS
} from '../constants';

const { COLUMN_DEFAULT_WIDTH } = SETTINGS;

class Invoice extends React.Component {
	state = {
		filterColumn: 'company',
		filterValue: '',
		filteredDataSource: [],
		isFitering: false,
	}

	columns = this.generateColumns();

	getFilterColumn = filterColumn => {
		this.setState({ filterColumn });
	}

	resetFilters = () => {
		this.setState({
			filterColumn: 'company',
			filterValue: '',
			filteredDataSource: [],
			isFitering: false,
		});
	}

	onDataSourceFilter = event => {
		const { invoiceData } = this.props;
		const { filterColumn: column } = this.state;
		let filterValue;
		let isFitering = true;

		if (column === 'company') {
			const { value: newfilterValue } = event.target;
			isFitering = !!newfilterValue;
			filterValue = newfilterValue;
		}

		const filteredDataSource = invoiceData.filter(data => {
			const value = column === 'company' ? data[column].name : data[column];

			if (['createdAt', 'dueDate'].includes(column)) {
				const [date1, date2] = event;
				return moment(value).isBetween(date1, date2);
			}

			return value.toLowerCase().includes(filterValue.toLowerCase());
		});

		this.setState({ filterValue, filteredDataSource, isFitering });
	}

	generateColumns() {
		return INVOICE_COLUMNS.map(column => {
			const { key } = column;

			return ({
				...column,
				align: 'center',
				filters: key === 'status' ? STATUS_FITLERS : [],
				onFilter: (filterVal, record) => record[key].value === filterVal,
				render: data => {
					let content = '';

					switch (key) {
						case 'company': {
							content = data.name;
							break;
						}
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
				width: COLUMN_DEFAULT_WIDTH,
			});
		});
	}

	render() {
		const { invoiceData } = this.props;
		const { filterColumn, filterValue, filteredDataSource, isFitering } = this.state;
		const source = isFitering ? filteredDataSource : invoiceData;

		return(
			<div className='invoice-container'>
				<FilterInput
					filterColumn={filterColumn}
					filterValue={filterValue}
					getFilterColumn={this.getFilterColumn}
					isFitering={isFitering}
					onDataSourceFilter={this.onDataSourceFilter}
					resetFilters={this.resetFilters}
				/>
				<Table
					columns={this.columns}
					dataSource={source}
				/>
			</div>
		);
	}
}

Invoice.propTypes = {
	invoiceData: PropTypes.array,
};

const mapStateToProps = state => ({
	invoiceData: invoiceDataSelector(state),
});

export default connect(mapStateToProps)(Invoice);
