import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Icon, List } from 'antd';

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} />
		{text}
	</span>
);

export default class Client extends React.Component {
	render() {
		const { invoiceData } = this.props;

		return (
			<div className='client-container'>
				<Button
					icon='user-add'
					onClick={() => {}}
					type='primary'
				>
					{'Add New Client'}
				</Button>
				<List
					bordered
					itemLayout="vertical"
					size="large"
					dataSource={invoiceData}
					renderItem={item => (
						<List.Item
							key={item.client}
							actions={[
								<IconText key="star-o" type="star-o" text="156" />,
								<IconText key="like-o" type="like-o" text="156" />,
								<IconText key="message" type="message" text="2" />,
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src={item.image}
								/>
							}
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
			</div>
		);
	}
}

IconText.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
};

Client.propTypes = {
	invoiceData: PropTypes.array,
};
