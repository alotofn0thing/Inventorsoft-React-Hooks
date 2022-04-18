import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';

export const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleSubmit = e => {
		e.preventDefault();
		const user = e.target.username.value;

		signIn(user);
	};
	return (
		<div>
			<h1>You need to login first to access content</h1>
			<form onSubmit={handleSubmit}>
				<input name='username' placeholder='Enter your name' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};
