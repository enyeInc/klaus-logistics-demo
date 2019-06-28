import faker from 'faker';
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

export default (fakeDataCount = 10) => {
	const fakeStatuses = generateFakeStatuses(fakeDataCount);

	return fakeStatuses.map(status => ({
		...generateDates(status),
		...generateAmountBalance(status),
		client: faker.company.companyName(),
		createdBy: faker.name.findName(),
		description: faker.lorem.paragraph(),
		image: faker.image.image(),
		key: uuid(),
		slogan: faker.company.bs(),
		status: getStatus(status),
	}));
};
