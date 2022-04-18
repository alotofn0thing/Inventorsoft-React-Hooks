import { useEffect, useState } from 'react';

import './style.scss';

import { ComponentDidUpdate } from './components/ComponentDidUpdate/ComponentDidUpdate';
import { ComponentWillUnmount } from './components/ComponentWillUnmount/ComponentWillUnmount';

export const UseCaseAnimation = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users?_starts=0&_limit=2')
			.then(response => response.json())
			.then(data => setUsers(data));
	}, []);

	return (
		<div className='content'>
			<h2>useEffect use case</h2>
			<hr />
			<h3>Running on component mounting: fetch data</h3>
			<h4>Users</h4>
			<ul>
				{users.map(user => {
					return (
						<li key={user.id}>
							Name: {user.name}, email: {user.email}
						</li>
					);
				})}
			</ul>
			<hr />
			<ComponentDidUpdate users={users} />
			<hr />
			<ComponentWillUnmount />
		</div>
	);
};
