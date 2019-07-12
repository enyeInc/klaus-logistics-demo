import React from 'react';
import { Checkbox, Descriptions } from 'antd';

const invalidKeys = [
	'createdAt',
	'createdBy',
	'company',
	'clientId',
	'dueDate',
	'image',
	'key',
];

function makeFirstLetterCapital(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export default data => {
	const items = Object.entries(data);

	return items.reduce((total, item) => {
		let [key, value] = item;

		if (invalidKeys.includes(key)) {
			return total;
		}
		if (typeof value === 'object') {
			if (key === 'address') {
				const { streetA = '', city = '', country = '', zipcode = '' } = value;

				value = `${streetA}, ${city} ${country}, ${zipcode}`;
			} else if (key === 'status') {
				console.log(key, value)
				value = value.value;
			}
		} else if (key === 'website') {
			value = <a>{value}</a>;
		} else if (key === 'approved') {
			value = <Checkbox checked={value} />;
		} else if (key === 'price' || key === 'amount') {
			value = `€ ${value}`;
		}

		total.push(
			<Descriptions.Item key={key} label={makeFirstLetterCapital(key)}>
				{value}
			</Descriptions.Item>
		);

		return total;
	}, []);
};
