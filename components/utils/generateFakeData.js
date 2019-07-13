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
		const randomAmountOfDays = generateRandomNumber(100);
		dueDate = moment(dueDate)
			.add(randomAmountOfDays, 'days')
			.format('YYYY-MM-DD HH:mm:ss');
	} else if (status === 'late') {
		const randomAmountOfDays = generateRandomNumber(90);
		dueDate = moment(dueDate)
			.subtract(randomAmountOfDays, 'days')
			.format('YYYY-MM-DD HH:mm:ss');
	}

	return {
		createdAt,
		dueDate,
	};
};

const generateAmountBalance = status => {
	const amount = parseFloat(faker.finance.amount());
	let balance = status === 'complete' ? 0 : amount;

	if (status === 'late') {
		balance = generateRandomNumber(amount - 1);
	}

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
			image: faker.image.business(),
			key: uuid(),
		};
		appData.add(data);
	}

	return appData;
};

export const generateInvoiceData = item => {
	const { company, createdBy, key } = item;
	const statusValue = pickRandomIndex(STATUSES);

	return {
		...generateDates(statusValue),
		...generateAmountBalance(statusValue),
		company,
		createdBy,
		key,
		status: getStatus(statusValue),
	};
};

export const generateClientData = item => {
	const {
		address,
		company = {},
		companyName,
		createdAt = moment().format('YYYY-MM-DD HH:mm:ss'),
		email,
		key = uuid(),
		name,
		notes = faker.lorem.paragraph(),
		phone,
		website = faker.internet.domainName(),
	} = item;

	return {
		address,
		company: companyName ? { bs: faker.company.bs(), name: companyName } : company,
		createdAt,
		email,
		image: faker.image.image(),
		key,
		name,
		notes,
		phone,
		website,
	};
};

export const generateOrderData = item => {
	const fakeDate = pickRandomIndex([faker.date.past(), faker.date.recent()]);

	const {
		approved = pickRandomIndex([true, false]),
		company: { name: company },
		createdAt = moment(fakeDate).format('YYYY-MM-DD HH:mm:ss'),
		createdBy = faker.name.findName(),
		driver = faker.name.findName(),
		dropOff = generateAddress(),
		key: clientId = uuid(),
		pickUp = generateAddress(),
		price = parseFloat(faker.finance.amount()),
	} = item;

	return {
		approved,
		clientId,
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

	return {
		appData,
		clientData,
		invoiceData,
		orderData,
	};
};
