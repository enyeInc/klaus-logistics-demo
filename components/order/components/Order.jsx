import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, Table, Tag } from 'antd';
import { connect } from 'react-redux';

import app from '../../app';
import OrderFilterInput from './OrderFilterInput';
import OrderModal from './OrderModal';
import { orderDataSelector } from '../../app/selectors';
import { DEFAULT_DATA_FORMAT, INVOICE_COLUMNS, SETTINGS } from '../constants';

const { createNewOrder, toggleOrderApproval } = app.actions;
const { CENTER, COLUMN_DEFAULT_WIDTH } = SETTINGS;

class Order extends React.Component {
	state = {
		filterColumn: 'company',
		filterValue: '',
		filteredDataSource: [],
		isFitering: false,
		isModalOpen: false,
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

		const filteredDataSource = orderData.filter(data => {
			const value = data[column];

			if (['createdAt'].includes(column)) {
				const [date1, date2] = event;
				return moment(value).isBetween(date1, date2);
			}

			const { value: newfilterValue } = event.target;
			isFitering = !!newfilterValue;
			filterValue = newfilterValue;

			return value.toLowerCase().includes(filterValue.toLowerCase());
		});

		this.setState({ filterValue, filteredDataSource, isFitering });
	}

	generateColumns() {
		const { toggleOrderApproval } = this.props;

		return INVOICE_COLUMNS.map(column => {
			const { key } = column;

			return ({
				...column,
				align: CENTER,
				onFilter: (filterVal, record) => record[key] === filterVal,
				render: (data, record) => {
					let content = '';

					switch (key) {
						case 'approved': {
							content = (
								<Checkbox
									checked={data}
									onChange={() => toggleOrderApproval({
										 approved: !data,
										 id: record.key,
									})}
								/>
							);
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

	toggleModal = () => {
		const { isModalOpen } = this.state;
		const { form } = this.formRef.props;

		form.resetFields();
		this.setState({ isModalOpen: !isModalOpen });
	}

	handleCreate = () => {
		const { form } = this.formRef.props;
		const { createNewOrder } = this.props;

		form.validateFields((error, fields) => {
			if (error) {
				return error;
			}

			createNewOrder({
				...fields,
				approved: false,
				company: { name: fields.companyName },
				createdAt: moment(new Date()),
			});
			this.toggleModal();
		});
	}

	saveFormRef = formRef => {
		this.formRef = formRef;
	}

	render() {
		const { orderData } = this.props;
		const {
			filterColumn,
			filterValue,
			filteredDataSource,
			isFitering,
			isModalOpen,
		} = this.state;
		const source = isFitering ? filteredDataSource : orderData;

		return(
			<div className='orders-container'>
				<OrderFilterInput
					filterColumn={filterColumn}
					filterValue={filterValue}
					getFilterColumn={this.getFilterColumn}
					isFitering={isFitering}
					onDataSourceFilter={this.onDataSourceFilter}
					resetFilters={this.resetFilters}
					toggleModal={this.toggleModal}
				/>
				<Table
					columns={this.columns}
					dataSource={source}
				/>
				<OrderModal
					isVisible={isModalOpen}
					toggleModal={this.toggleModal}
					onCreate={this.handleCreate}
					wrappedComponentRef={this.saveFormRef}
				/>
			</div>
		);
	}
}

Order.propTypes = {
	createNewOrder: PropTypes.func,
	orderData: PropTypes.array,
	toggleOrderApproval: PropTypes.func,
};

const mapStateToProps = state => ({
	orderData: orderDataSelector(state),
});

const mapDispatchToProps = { createNewOrder, toggleOrderApproval };

export default connect(mapStateToProps, mapDispatchToProps)(Order);
