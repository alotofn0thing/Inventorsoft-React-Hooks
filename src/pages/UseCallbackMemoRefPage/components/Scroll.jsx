import { useState, useCallback, useRef } from 'react';

export const Scroll = () => {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
	const ulRef = useRef();
	const numRef = useRef();

	numRef.current = numbers;

	const addNumber = () => {
		setNumbers(prev => [...prev, prev[prev.length - 1] + 1]);
	};

	const handleScroll = useCallback(() => {
		console.log('Scroll!');
	}, []);

	const start = () => {
		ulRef.current.addEventListener('scroll', handleScroll);
	};

	const stop = () => {
		ulRef.current.removeEventListener('scroll', handleScroll);
	};

	return (
		<div>
			<ul className='ul' ref={ulRef}>
				{numbers.map(n => (
					<li className='li' key={n}>
						{n}
					</li>
				))}
			</ul>
			<button className='buttonS' onClick={addNumber}>
				Add number
			</button>
			<button className='buttonS' onClick={start}>
				Start scroll event listener
			</button>
			<button className='buttonS' onClick={stop}>
				Clear event listener
			</button>
		</div>
	);
};
