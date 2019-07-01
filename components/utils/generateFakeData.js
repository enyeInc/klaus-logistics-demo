import faker from 'faker/locale/de';
import uuid from 'uuid';

const STATUSES = [ 'complete', 'late', 'pending' ];

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

const generateRandomNumber = (ceil = 3) => Math.floor(Math.random() * ceil) + 1;

const pickRandomIndex = array => array[Math.floor(Math.random()*array.length)];

const generateAmountBalance = status => {
	const amount = parseFloat(faker.finance.amount());
	const balance = status === 'complete' ? 0 : amount;

	return { amount, balance };
};

const generateFakeStatuses = (numberOfStatus = 10) => {
	const fakeStatuses = [];

	while (fakeStatuses.length < numberOfStatus) {
		const randomStatus = pickRandomIndex(STATUSES);
		fakeStatuses.push(randomStatus);
	}

	return fakeStatuses;
};

const generateAddres = () => faker.fake("" +
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

export const createFakeClient = (status, data) => {
	let client = {
		...generateDates(status),
		...generateAmountBalance(status),
		...faker.helpers.createCard(),
		createdBy: faker.name.findName(),
		image: faker.image.image(),
		key: uuid(),
		notes: faker.lorem.paragraph(),
		status: getStatus(status),
	};

	if (data) {
		const { address, companyName, email, name, notes, phone } = data;

		client = {
			...client,
			address,
			company: { ...client.company, name: companyName },
			createdAt: moment(new Date()),
			email,
			name,
			notes,
			phone,
		};
	}

	return client;
};

const createFakeOrders = (total, item) => {
	const orderCount = generateRandomNumber();
	const orders = {};

	while (Object.keys(orders).length < orderCount) {
		const data = createOrderData(item);
		orders[data.key] = data;
	}

	return {
		...total,
		...orders,
	};
};

export const createOrderData = item => {
	const {
		approved = pickRandomIndex([true, false]),
		company: { name: company },
		createdAt = pickRandomIndex([faker.date.past(), faker.date.recent()]),
		createdBy = faker.name.findName(),
		driver = faker.name.findName(),
		dropOff = generateAddres(),
		pickUp = generateAddres(),
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
	const fakeStatuses = generateFakeStatuses(fakeDataCount);

	// TODO create Invoice data, and client data
	const appData = fakeStatuses.map(status => createFakeClient(status));
	const orderData = appData.reduce(createFakeOrders, {});

	// for each item in the app data create a random
	return {
		appData,
		orderData,
	};
};
