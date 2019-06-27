import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const Index = props => {
	const childrenWithExtraProp = React.Children.map(
		props.children,
		child => React.cloneElement(child, props)
	);

	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<body>
				{childrenWithExtraProp}
			</body>
		</React.Fragment>
	);
};

Index.propTypes = {
	children: PropTypes.node,
};

export default Index;
