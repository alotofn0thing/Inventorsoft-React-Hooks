import { INCREMENT, DECREMENT, RESET } from './consts';

export const increment = payload => {
	return { type: INCREMENT, payload };
};

export const reset = payload => {
	return { type: RESET, payload };
};

export const decrement = payload => {
	return { type: DECREMENT, payload };
};
