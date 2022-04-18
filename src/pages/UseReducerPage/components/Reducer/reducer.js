import { INCREMENT, DECREMENT, RESET } from './consts';

export const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT: {
			return {
				counter: state.counter + action.payload,
			};
		}
		case RESET: {
			return {
				counter: (state.counter = action.payload),
			};
		}
		case DECREMENT: {
			return {
				counter: state.counter - action.payload,
			};
		}
		default:
			throw new Error();
	}
};
