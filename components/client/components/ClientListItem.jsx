import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Avatar, Descriptions, Icon, List } from 'antd';
import { connect } from 'react-redux';

import { clientInvoicesByIdSelector, clientOrdersByIdSelector } from '../selectors';
import { generateDescriptionItems, generateSigninInputs } from '../../utils';
import { DESCRIPTION_TITLE, FORM_INPUTS, MODAL_TITLE, SETTINGS } from '../constants';

const { LAYOUT } = SETTINGS;

const IconText = ({ action, entries, type, text }) => (
	<span onClick={() => action(entries, text)}>
		<Icon type={type} />
		<a>{text}</a>
	</span>
);

class ClientListItem extends React.Component {
	onIconTextClick = (entries, type) => {
		const { item, toggleModal } = this.props;
		const { name } = item.company;

		toggleModal(entries, name, type);
	}

	render() {
		const { invoices, item, orders } = this.props;
		const { company, image, notes } = item;
		const { name, catchPhrase } = company;

		return (
			<List.Item
				key={name}
				actions={[
					<IconText
						action={this.onIconTextClick}
						entries={orders}
						key="orders"
						text="Orders"
						type="shopping-cart"
					/>,
					<IconText
						action={this.onIconTextClick}
						entries={invoices}
						key="invoices"
						text="Invoices"
						type="book"
					/>,
				]}
			>
				<List.Item.Meta
					avatar={<Avatar src={image} />}
					title={<a>{name}</a>}
					description={catchPhrase}
				/>
				<Descriptions
					bordered
					column={{ lg:2, md: 1, sm: 1, xl: 3, xs: 1 }}
					layout={LAYOUT}
				>
					{generateDescriptionItems(item)}
				</Descriptions>
			</List.Item>
		);
	}
}

IconText.propTypes = {
	action: PropTypes.func,
	entries: PropTypes.array,
	text: PropTypes.string,
	type: PropTypes.string,
};

ClientListItem.propTypes = {
	invoices: PropTypes.array,
	item: PropTypes.object,
	orders: PropTypes.array,
	toggleModal: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
	invoices: clientInvoicesByIdSelector(state, props.item.key),
	orders: clientOrdersByIdSelector(state, props.item.key),
});

export default connect(mapStateToProps)(ClientListItem);
