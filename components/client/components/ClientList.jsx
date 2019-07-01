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

class ClientList extends React.Component {
	render() {
		const { clientData } = this.props;

		return (
			<List
				bordered
				itemLayout="vertical"
				pagination={{ pageSize: 10 }}
				dataSource={clientData}
				renderItem={item => (
					<List.Item
						key={item.client}
						actions={[
							<IconText key="star-o" type="star-o" text="156" />,
							<IconText key="like-o" type="like-o" text="156" />,
							<IconText key="message" type="message" text="2" />,
						]}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.image} />}
							title={<a href={item.href}>{item.client}</a>}
							description={item.slogan}
						/>
						<div className='client-description'>
							{item.description}
						</div>
					</List.Item>
				)}
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
