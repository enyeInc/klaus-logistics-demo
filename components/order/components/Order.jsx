import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, Table, Tag } from 'antd';
import { connect } from 'react-redux';

import { orderDataSelector } from '../../app/selectors';

import {
	COMPONENT_NAME,
	DEFAULT_DATA_FORMAT,
	INVOICE_COLUMNS,
	STATUS_FITLERS,
	SETTINGS
} from '../constants';

const { COLUMN_DEFAULT_WIDTH } = SETTINGS;

class Order extends React.Component {
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
		const { orderData } = this.props;
		const { filterColumn: column } = this.state;
		let filterValue;
		let isFitering = true;

		if (column === 'company') {
			const { value: newfilterValue } = event.target;
			isFitering = !!newfilterValue;
			filterValue = newfilterValue;
		}

		const filteredDataSource = orderData.filter(data => {
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
						case 'approved': {
							content = <Checkbox checked={data} />;
							break;
						}
						case 'createdAt':
							content = moment(data).format(DEFAULT_DATA_FORMAT);
							break;
						case 'price':
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
		const { orderData } = this.props;
		const { filterColumn, filterValue, filteredDataSource, isFitering } = this.state;
		const source = isFitering ? filteredDataSource : orderData;

		return(
			<div className='invoice-container'>
				<Table
					columns={this.columns}
					dataSource={orderData}
				/>
			</div>
		);
	}
}

Order.propTypes = {
	orderData: PropTypes.array,
};

const mapStateToProps = state => ({
	orderData: orderDataSelector(state),
});

export default connect(mapStateToProps)(Order);
