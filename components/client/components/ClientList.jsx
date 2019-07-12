import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { List, Modal } from 'antd';
import { connect } from 'react-redux';

import ClientListItem from './ClientListItem';
import ClientListItemModal from './ClientListItemModal';
import { clientDataSelector } from '../selectors';
import { SETTINGS } from '../constants';

const { LAYOUT, PAGE_SIZE } = SETTINGS;

class ClientList extends React.Component {
	state = {
		companyName: '',
		isModalOpen: false,
		modalData: [],
		modalType: '',
	}

	toggleModal = (modalData = [], name, modalType = '') => {
		this.setState({
			companyName: name,
			isModalOpen: !this.state.isModalOpen,
			modalData,
			modalType,
		});
	}

	render() {
		const { clientData } = this.props;
		const { companyName, isModalOpen, modalData, modalType } = this.state;

		return (
			<Fragment>
				<List
					bordered
					itemLayout={LAYOUT}
					pagination={{ pageSize: PAGE_SIZE }}
					dataSource={clientData}
					renderItem={item => (
						<ClientListItem
							item={item}
							toggleModal={this.toggleModal}
						/>
					)}
				/>
				<ClientListItemModal
					data={modalData}
					isVisible={isModalOpen}
					title={`${companyName}: ${modalType}`}
					type={modalType}
					toggleModal={this.toggleModal}
				/>
			</Fragment>
		);
	}
}

ClientList.propTypes = {
	clientData: PropTypes.array,
};

const mapStateToProps = state => ({
	clientData: clientDataSelector(state),
});

export default connect(mapStateToProps)(ClientList);
