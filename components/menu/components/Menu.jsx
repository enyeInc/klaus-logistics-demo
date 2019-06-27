import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';

import { MENU_ITEMS, SETTINGS } from '../constants.js';

const { Item } = Menu;
const { DEFAULT_SELECTED_KEYS, MODE, THEME } = SETTINGS;

const AppMenu = props => {
	const { pathname } = props.router;
	const selectedKeys = pathname === '/' ? DEFAULT_SELECTED_KEYS : [pathname];

	return (
		<Menu
			selectedKeys={selectedKeys}
			mode={MODE}
			theme={THEME}
		>
			{
				MENU_ITEMS.map(item => {
					const { href, iconType, text } = item;

					return (
						<Item key={href}>
							<Link href={href}>
								<a>
									<Icon type={iconType} />
									<span>{text}</span>
								</a>
							</Link>
						</Item>
					);
				})
			}
		</Menu>
	);
};

AppMenu.propTypes = {
	router: PropTypes.object,
};

export default AppMenu;
