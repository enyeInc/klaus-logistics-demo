import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Avatar, Descriptions, Icon, List } from 'antd';

import { generateDescriptionItems, generateSigninInputs } from '../../utils';
import { DESCRIPTION_TITLE, FORM_INPUTS, MODAL_TITLE, SETTINGS } from '../constants';

const { LAYOUT } = SETTINGS;

const IconText = ({ type, text }) => (
	<span>
		<Icon
			type={type}
			theme='twoTone'
			twoToneColor={text === 'Orders' && '#52c41a'}
		/>
		{text}
	</span>
);

const ClientListItem = ({ item }) => {
	const { company, image, notes } = item;
	const { name, catchPhrase } = company;

	return (
		<List.Item
			key={name}
			actions={[
				<IconText key="star-o" type="star-o" text="Orders" />,
				<IconText key="like-o" type="like-o" text="Invoices" />,
			]}
		>
			<List.Item.Meta
				avatar={<Avatar src={image} />}
				title={<a>{name}</a>}
				description={catchPhrase}
			/>
			<Descriptions
				bordered layout={LAYOUT}
				column={{ lg:2, md: 1, sm: 1, xl: 3, xs: 1 }}
			>
				{generateDescriptionItems(item)}
			</Descriptions>
		</List.Item>
	);
};

IconText.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
};

ClientListItem.propTypes = {
	item: PropTypes.object,
};

export default ClientListItem;
