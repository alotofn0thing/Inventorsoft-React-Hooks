import { useState, useEffect } from 'react';

export const ComponentWillUnmount = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('You are on the page for', timer, 'seconds');
			setTimer(timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<>
			<h3>Running on component unmounting: clearInterval</h3>
			<p>You are on the page for {timer} seconds</p>
			<h5>
				*If u leave this page, timer will stop. U can see this if u open
				console.
			</h5>
		</>
	);
};
