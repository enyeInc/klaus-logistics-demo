import { Button, Table, Tag } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
	DEFAULT_DATA_FORMAT,
	HIGH_LIGHTER_STYLE,
	INVOICE_COLUMNS,
	INVOICE_DATA,
	STATUS_FITLERS
} from '../constants';
import { generateFakeData } from '../utils';
const dataSource = generateFakeData();

export default class Invoice extends React.Component {
	state = {
		filteredInfo: {},
	}

	handleChange = (pagination, filters, sorter) => {
		this.setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	};

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
						case 'dueDate': {
							content = moment(data).format(DEFAULT_DATA_FORMAT);
							break;
						}
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
				},
				width: '12%',
			});
		});
	}
	render() {
		const columns = this.generateColumns();
		console.log(columns, dataSource);
		return(
			<Fragment>
				<Table
					columns={columns}
					dataSource={dataSource}
					onChange={this.handleChange}
				/>
			</Fragment>
		);
	}
}
