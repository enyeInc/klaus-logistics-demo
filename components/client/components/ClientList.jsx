import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { connect } from 'react-redux';

import ClientListItem from './ClientListItem';
import { clientDataSelector } from '../selectors';
import { SETTINGS } from '../constants';

const { LAYOUT, PAGE_SIZE } = SETTINGS;

class ClientList extends React.Component {
	render() {
		const { clientData } = this.props;

		return (
			<List
				bordered
				itemLayout={LAYOUT}
				pagination={{ pageSize: PAGE_SIZE }}
				dataSource={clientData}
				renderItem={item => <ClientListItem item={item} />}
			/>
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
