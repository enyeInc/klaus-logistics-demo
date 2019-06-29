import React from 'react';
import PropTypes from 'prop-types';
import { Form, Modal } from 'antd';

const ClientModal = props => {
	const { isVisible, toggleModal } = props;

	return (
		<Modal
			title="Basic Modal"
			visible={isVisible}
			onOk={toggleModal}
			onCancel={toggleModal}
		>
			<p>{'Some contents...'}</p>
		</Modal>

	);
};

ClientModal.propTypes = {
	isVisible: PropTypes.bool,
	toggleModal: PropTypes.func,
};

export default ClientModal;
