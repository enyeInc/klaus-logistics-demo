import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Button, Form, Icon, Input, Modal, Upload, message } from 'antd';

import { generateSigninInputs } from '../../utils';
import { FORM_INPUTS, MODAL_TITLE } from '../constants';

class OrderModal extends React.Component {
	render() {
		const { form, isVisible, onCreate, toggleModal } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Modal
				title={MODAL_TITLE}
				visible={isVisible}
				onOk={onCreate}
				onCancel={toggleModal}
			>
				<Form>
					{generateSigninInputs(getFieldDecorator, FORM_INPUTS)}
				</Form>
			</Modal>

		);
	}
}

OrderModal.propTypes = {
	form: PropTypes.object,
	isVisible: PropTypes.bool,
	onCreate: PropTypes.func,
	toggleModal: PropTypes.func,
};

export default Form.create()(OrderModal);
