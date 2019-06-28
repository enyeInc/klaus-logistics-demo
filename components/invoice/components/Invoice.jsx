import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';

import FilterInput from './FilterInput';
import { requestInvoiceData } from '../actions';
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
	static async getInitialProps ({ Component, ctx }) {
		const initialStore = ctx.store.getState();

		if (!initialStore[COMPONENT_NAME].invoiceData) {
			console.log('THERE IS NO INVOICE DATA', requestInvoiceData());
			// dispatch action to request invoice data
			await ctx.store.dispatch(requestInvoiceData());
		}

		return null;
	}

	state = {
		filterColumn: 'client',
		filterValue: '',
		filteredDataSource: [],
		filteredInfo: {},
		isFitering: false,
	}

	columns = this.generateColumns();

	handleChange = (pagination, filteredInfo, sortedInfo) => {
		this.setState({ filteredInfo, sortedInfo });
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
		const { invoiceData } = this.props;
		const { filterColumn: column } = this.state;
		let filterValue;
		let isFitering = true;

		if (column === 'client') {
			const { value: newfilterValue } = event.target;
			isFitering = !!newfilterValue;
			filterValue = newfilterValue;
		}

		const filteredDataSource = invoiceData.filter(data => {
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
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

Invoice.propTypes = {
	invoiceData: PropTypes.array,
};

const mapStateToProps = state => {
	console.log(state);

	return ({
		invoiceData: invoiceDataSelector(state),
	});
}

const mapDispatchToProps = { requestInvoiceData };

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
