import { useContext } from 'react';

import { Login } from './components/Login/Login';
import { AuthContext } from '../../Context/AuthContext';

import './style.scss';

export const UseContextPage = () => {
	const { login, signOut } = useContext(AuthContext);

	const handleClick = e => {
		signOut();
	};

	const content = (
		<div>
			<h1>
				Gratz, <span className='name'>{login}</span>, you are logged in!
			</h1>
			<button onClick={handleClick}>Log out</button>
		</div>
	);

	return login ? content : <Login />;
};
