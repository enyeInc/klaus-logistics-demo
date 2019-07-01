import React from 'react';
import { Descriptions } from 'antd';

function makeFirstLetterCapital(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export default data => {
	const items = Object.entries(data);

	return items.reduce((total, item) => {
		let [key, value] = item;

		if (['company', 'image'].includes(key)) {
			return total;
		}

		if (typeof value === 'object') {
			if (key === 'address') {
				const { streetA, city, country, zipcode } = value;

				value = `${streetA}, ${city} ${country}, ${zipcode}`;
			}
		} else if (key === 'website') {
			value = <a>{value}</a>;
		}

		total.push(
			<Descriptions.Item key={key} label={makeFirstLetterCapital(key)}>
				{value}
			</Descriptions.Item>
		);

		return total;
	}, []);
};
