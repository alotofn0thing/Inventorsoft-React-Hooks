import { NavLink, Outlet } from 'react-router-dom';
import './style.scss';
export const Layout = () => {
	return (
		<>
			<header>
				<div className='head'>React Hooks Examples</div>
				<div className='links'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/state'>useState</NavLink>
					<NavLink to='/effect'>useEffect</NavLink>
					<NavLink to='/context'>useContext</NavLink>
					<NavLink to='/reducer'>useReducer</NavLink>
					<NavLink to='/callback-memo-ref'>useCallback/useMemo/useRef</NavLink>
				</div>
			</header>
			<Outlet />
		</>
	);
};
