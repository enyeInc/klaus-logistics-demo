import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialAppState = {};

const reducer = (state = initialAppState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const configureStore = (initialState = initialAppState) => createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware())
);
