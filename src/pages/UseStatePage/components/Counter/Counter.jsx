import { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Counter;
