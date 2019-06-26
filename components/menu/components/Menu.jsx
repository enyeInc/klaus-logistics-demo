import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';

import { MENU_ITEMS, SETTINGS } from '../constants.js';

const { Item } = Menu;
const { DEFAULT_SELECTED_KEYS, MODE, THEME } = SETTINGS;

// TODO: set select based of od location data
// TODO: pick prop icons 
const AppMenu = () => (
	<Menu
		defaultSelectedKeys={DEFAULT_SELECTED_KEYS}
		mode={MODE}
		theme={THEME}
	>
		{
			MENU_ITEMS.map(item => {
				const { href, iconType, key, text } = item;

				return (
					<Item key={key}>
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

export default AppMenu;
