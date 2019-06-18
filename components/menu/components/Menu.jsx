import { Icon, Menu } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import { MENU_ITEMS, SETTINGS } from '../constants.js';

const { Item } = Menu;
const { DEFAULT_SELECTED_KEYS, MODE, THEME } = SETTINGS;

const AppMenu = () => (
	<Menu
		defaultSelectedKeys={DEFAULT_SELECTED_KEYS}
		mode={MODE}
		theme={THEME}
	>
		{
			MENU_ITEMS.map(item => {
				const { iconType, key, text } = item;

				return (
					<Item key={key}>
						<Icon type={iconType} />
						<span>{text}</span>
					</Item>
				);
			})
		}
	</Menu>
);

export default AppMenu;
