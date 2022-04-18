import { useState } from 'react';

export const LetsMeet = () => {
	const [name, setName] = useState('');
	return (
		<div>
			<h2>My name is Volodymyr! What's yours?</h2>
			<input
				type='text'
				onChange={e => setName(e.target.value)}
				placeholder='Enter your name'
			/>
			<h2>Hello, {name} ;)</h2>
		</div>
	);
};
