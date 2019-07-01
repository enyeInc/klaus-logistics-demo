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
	const amount = faker.finance.amount();
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

const sortByCreatedAt = (itemA, itemB) => {
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
			email,
			name,
			notes,
			phone,
		};
	}

	return client;
};

export const createOrderData = (total, item) => {
	const { company, createdBy } = item;
	const orderCount = generateRandomNumber();
	const orders = [];

	while (orders.length < orderCount) {
		const isApproved = pickRandomIndex([true, false]);

		const order = {
			approved: isApproved,
			company: company.name,
			createdAt: pickRandomIndex([faker.date.past(), faker.date.recent()]),
			createdBy,
			driver: faker.name.findName(),
			dropOff: faker.fake(""+
				 "{{address.streetAddress}}," +
				 " {{address.city}}" +
				 " {{address.country}},"+
				 " {{address.zipCode}}"
		 	),
			pickUp: faker.fake(""+
				 "{{address.streetAddress}}," +
				 " {{address.city}}" +
				 " {{address.country}},"+
				 " {{address.zipCode}}"
		 	),
			price: faker.finance.amount(),
		};

		orders.push(order);
	}

	return [...total, ...orders] ;
};

export default (fakeDataCount = 10) => {
	const fakeStatuses = generateFakeStatuses(fakeDataCount);

	// TODO create Invoice data, and client data
	const appData = fakeStatuses.map(status => createFakeClient(status));
	const orderData = appData
		.reduce(createOrderData, [])
		.sort(sortByCreatedAt);

	// for each item in the app data create a random
	return {
		appData,
		orderData,
	};
};
