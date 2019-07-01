import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Icon, List } from 'antd';
import { connect } from 'react-redux';

import { companyDetailsSelector } from '../selectors';

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} />
		{text}
	</span>
);

function generateListItem(item) {
	const { company, image, notes } = item;
	const { name, catchPhrase } = company;

	return (
		<List.Item
			key={name}
			actions={[
				<IconText key="star-o" type="star-o" text="156" />,
				<IconText key="like-o" type="like-o" text="156" />,
				<IconText key="message" type="message" text="2" />,
			]}
		>
			<List.Item.Meta
				avatar={<Avatar src={image} />}
				title={<a href={item.href}>{name}</a>}
				description={catchPhrase}
			/>
			<div className='client-description'>
				{notes}
			</div>
		</List.Item>
	);
}

class ClientList extends React.Component {
	render() {
		const { clientData } = this.props;

		return (
			<List
				bordered
				itemLayout="vertical"
				pagination={{ pageSize: 10 }}
				dataSource={clientData}
				renderItem={item => generateListItem(item)}
			/>
		);
	}
}

IconText.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
};

ClientList.propTypes = {
	clientData: PropTypes.array,
};

const mapStateToProps = state => ({
	clientData: companyDetailsSelector(state),
});

export default connect(mapStateToProps)(ClientList);
