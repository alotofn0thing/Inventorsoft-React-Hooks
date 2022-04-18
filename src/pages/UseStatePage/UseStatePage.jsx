import { Counter } from './components/Counter/Counter';
import { LetsMeet } from './components/LetsMeet/LetsMeet';
import './style.scss';

export const UseStatePage = () => {
	return (
		<div className='container'>
			<Counter />
			<LetsMeet />
		</div>
	);
};
