import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import { connect } from 'react-redux';

import ClientList from './ClientList';
import ClientModal from './ClientModal';
import { createNewClient } from '../actions';
import { ADD_CLIENT_TEXT } from '../constants';

class Client extends React.Component {
	state = {
		isClientModalOpen: false,
	};

	toggleModal = () => {
		const { isClientModalOpen } = this.state;
		const { form } = this.formRef.props;

		form.resetFields();
		this.setState({ isClientModalOpen: !isClientModalOpen });
	}

	handleCreate = () => {
		const { form } = this.formRef.props;
		const { createNewClient } = this.props;

		form.validateFields((error, fields) => {
			if (error) {
				return error;
			}

			createNewClient(fields);
			this.toggleModal();
		});
	}

	saveFormRef = formRef => {
		this.formRef = formRef;
	}

	render() {
		const { clientData } = this.props;
		const { isClientModalOpen } = this.state;

		return (
			<div className='client-container'>
				<Button
					icon='user-add'
					onClick={this.toggleModal}
					type='primary'
				>
					{ADD_CLIENT_TEXT}
				</Button>
				<ClientList />
				<ClientModal
					isVisible={isClientModalOpen}
					toggleModal={this.toggleModal}
					onCreate={this.handleCreate}
					wrappedComponentRef={this.saveFormRef}
				/>
			</div>
		);
	}
}

Client.propTypes = {
	clientData: PropTypes.array,
	createNewClient: PropTypes.func,
};

const mapDispatchToProps = { createNewClient };

export default connect(null, mapDispatchToProps)(Client);
