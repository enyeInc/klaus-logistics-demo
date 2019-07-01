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

const generateAmountBalance = status => {
	const amount = faker.finance.amount();
	const balance = status === 'complete' ? 0 : amount;

	return { amount, balance };
};

const generateFakeStatuses = (numberOfStatus = 10) => {
	const fakeStatuses = [];

	while (fakeStatuses.length < numberOfStatus) {
		const randomStatus = STATUSES[Math.floor(Math.random()*STATUSES.length)];
		fakeStatuses.push(randomStatus);
	}

	return fakeStatuses;
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

	// TODO: restrucutre invoice data retrival - separate it from application
	// level data

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

export default (fakeDataCount = 10) => {
	const fakeStatuses = generateFakeStatuses(fakeDataCount);

	return fakeStatuses.map(status => createFakeClient(status));
};
