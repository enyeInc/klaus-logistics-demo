import faker from 'faker/locale/de';
import moment from 'moment';
import uuid from 'uuid';

const STATUSES = [ 'complete', 'late', 'pending' ];

const generateRandomNumber = (ceil = 3) => Math.floor(Math.random() * ceil) + 1;

const pickRandomIndex = array => array[Math.floor(Math.random()*array.length)];

const getStatus = status => {
	let statusData = {
		color: '#2db7f5',
		value: 'Pending',
	};

	if (status === 'late') {
		statusData = {
			color: '#f50',
			value: 'Late',
		};
	} else if (status === 'complete') {
		statusData = {
			color: '#87d068',
			value: 'Complete',
		};
	}

	return statusData;
};

const generateDates = status => {
	const createdAt = faker.date.past();
	let dueDate = faker.date.recent();

	if (status === 'pending') {
		dueDate = faker.date.future();
	}

	return {
		createdAt,
		dueDate,
	};
};

const generateAmountBalance = status => {
	const amount = parseFloat(faker.finance.amount());
	const balance = status === 'complete' ? 0 : amount;

	return { amount, balance };
};

const generateAddress = () => faker.fake("" +
	 "{{address.streetAddress}}," +
	 " {{address.city}}" +
	 " {{address.country}}," +
	 " {{address.zipCode}}"
);

export const sortByCreatedAt = (itemA, itemB) => {
	const { createdAt: createdAtA } = itemA;
	const { createdAt: createdAtB } = itemB;

	if (createdAtA > createdAtB) {
		return -1;
	}

	if (createdAtA < createdAtB) {
		return 1;
	}

	return 0;
};

const createFakeOrders = item => {
	const orderCount = generateRandomNumber();
	const orders = {};

	while (Object.keys(orders).length < orderCount) {
		const data = generateOrderData(item);
		orders[data.key] = data;
	}

	return orders;
};

export const generateAppData = dataCount => {
	const appData = new Set();

	while (appData.size < dataCount) {
		const data = {
			...faker.helpers.createCard(),
			createdBy: faker.name.findName(),
			image: faker.image.image(),
			key: uuid(),
		};
		appData.add(data);
	}

	return appData;
};

export const generateInvoiceData = item => {
	const { createdBy } = item;
	const statusValue = pickRandomIndex(STATUSES);

	return {
		...generateDates(statusValue),
		...generateAmountBalance(statusValue),
		createdBy,
		status: getStatus(statusValue),
	};
};

export const generateClientData = item => {
	const {
		address,
		company = {},
		companyName,
		createdBy,
		email,
		name,
		notes = faker.lorem.paragraph(),
		phone,
	} = item;

	return {
		address,
		company: companyName ? { bs: faker.company.bs(), name: companyName } : company,
		createdAt: moment(new Date()),
		createdBy,
		email,
		name,
		notes,
		phone,
	};
};

export const generateOrderData = item => {
	const {
		approved = pickRandomIndex([true, false]),
		company: { name: company },
		createdAt = pickRandomIndex([faker.date.past(), faker.date.recent()]),
		createdBy = faker.name.findName(),
		driver = faker.name.findName(),
		dropOff = generateAddress(),
		pickUp = generateAddress(),
		price = parseFloat(faker.finance.amount()),
	} = item;

	return {
		approved,
		company,
		createdAt,
		createdBy,
		driver,
		dropOff,
		key: uuid(),
		pickUp,
		price,
	};
};

export default (fakeDataCount = 10) => {
	const appData = generateAppData(fakeDataCount);
	const clientData = {};
	const invoiceData = {};
	let orderData = {};

	appData.forEach(item => {
		clientData[item.key] = generateClientData(item);
		invoiceData[item.key] = generateInvoiceData(item);
		orderData = {
			...orderData,
			...createFakeOrders(item),
		};
	});

	// for each item in the app data create a random
	return {
		clientData,
		invoiceData,
		orderData,
	};
};
