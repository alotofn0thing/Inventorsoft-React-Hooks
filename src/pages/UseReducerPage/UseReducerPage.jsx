import { useReducer } from 'react';

import { reducer } from './components/Reducer/reducer';
import { increment, decrement, reset } from './components/Reducer/actions';

export const UseReducerPage = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });

	return (
		<>
			<h1>Simple useReducer example.</h1>
			<div>
				<h2>Count: {state.counter}</h2>
				<button onClick={() => dispatch(decrement(1))}>Decrement</button>
				<button onClick={() => dispatch(reset(0))}>Reset</button>
				<button onClick={() => dispatch(increment(1))}>Increment</button>
			</div>
		</>
	);
};
