import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Card, Descriptions, List, Modal } from 'antd';

import { generateDescriptionItems } from '../../utils';
import { SETTINGS } from '../constants';

const { LAYOUT } = SETTINGS;

function generateCardItem(item, type) {
	return (
		<List.Item>
			<Descriptions
				bordered
				column={{ lg:1, md: 1, sm: 1, xl: 1, xs: 1 }}
				layout={LAYOUT}
				size='small'
			>
				{generateDescriptionItems(item)}
			</Descriptions>
		</List.Item>
	);
}

const ClientListItemModal = props => {
	const { data, isVisible, title, toggleModal, type } = props;

	return (
		<Modal
			title={title}
			visible={isVisible}
			onOk={() => toggleModal()}
			onCancel={() => toggleModal()}
		>
			<List
				dataSource={data}
				renderItem={item => generateCardItem(item, type)}
			/>
		</Modal>
	);
};

ClientListItemModal.propTypes = {
	data: PropTypes.array,
	isVisible: PropTypes.bool,
	title: PropTypes.string,
	toggleModal: PropTypes.func,
	type: PropTypes.string,
};

export default ClientListItemModal;
