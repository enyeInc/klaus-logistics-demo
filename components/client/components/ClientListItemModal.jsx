import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Descriptions, List, Modal } from 'antd';

import { generateDescriptionItems } from '../../utils';
import { SETTINGS } from '../constants';

const { LAYOUT } = SETTINGS;

function generateListItem(item, type) {
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
			className='client-list-item-modal'
		>
			<List
				dataSource={data}
				grid={{ column: 3, gutter: 16 }}
				renderItem={item => generateListItem(item, type)}
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
