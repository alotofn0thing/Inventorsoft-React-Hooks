import { useState, useEffect } from 'react';
import './style.scss';

export const ComponentDidUpdate = ({ users }) => {
	const [array, setArray] = useState([]);
	const [triggerAnimation, setTriggerAnimation] = useState(false);

	const clickHandler = e => {
		e.preventDefault();
		setArray(prev => {
			const newItem = [...prev];
			newItem.push(e.target.value);
			return newItem;
		});
	};

	const clearHandler = e => {
		e.preventDefault();
		setArray([]);
	};

	useEffect(() => {
		setTriggerAnimation(true);

		const timer = setTimeout(() => {
			setTriggerAnimation(false);
		}, 900);

		return () => {
			clearTimeout(timer);
		};
	}, [array]);

	const cartClasses = triggerAnimation
		? `${'jello-horizontal'} ${'cart'}`
		: 'cart';

	const itemsInArray = users.map(user => {
		return (
			<li key={user.id}>
				<form>
					<span className='item'>
						{user.name}
						<button onClick={clickHandler} value={`"${user.name}"`}>
							Add to cart
						</button>
					</span>
				</form>
			</li>
		);
	});

	const cartItems = array.map((item, idx) => {
		return <li key={idx}>{item}</li>;
	});
	return (
		<>
			<h3>Running on state change: trigger animation on new array value</h3>
			<h4>Array</h4>
			<ul>{itemsInArray}</ul>
			<div className={cartClasses}>
				<span>Items array</span>
			</div>
			<div>
				<p className='elements'>Items in array:</p>
				<ul className='elements'>{cartItems}</ul>
			</div>
			<form>
				<button onClick={clearHandler} value='clear'>
					Clear array
				</button>
			</form>
		</>
	);
};
