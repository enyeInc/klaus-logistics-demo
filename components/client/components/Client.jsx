import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Modal } from 'antd';

import ClientList from './ClientList';
import ClientModal from './ClientModal';
import { ADD_CLIENT_TEXT } from '../constants';

export default class Client extends React.Component {
	state = {
		isModalOpen: false,
	};

	toggleModal = () => {
		const { isModalOpen } = this.state;

		this.setState({ isModalOpen: !isModalOpen });
	}

	render() {
		const { clientData } = this.props;
		const { isModalOpen } = this.state;
		
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
					isVisible={isModalOpen}
					toggleModal={this.toggleModal}
				/>
			</div>
		);
	}
}

Client.propTypes = {
	clientData: PropTypes.array,
};
