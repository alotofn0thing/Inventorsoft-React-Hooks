import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { UseStatePage } from './pages/UseStatePage/UseStatePage';
import { UseCaseAnimation } from './pages/UseEffectPage/UseEffectPage';
import { UseContextPage } from './pages/UseContextPage/UseContextPage';
import { UseReducerPage } from './pages/UseReducerPage/UseReducerPage';
import { UseCallbackMemoRefPage } from './pages/UseCallbackMemoRefPage/UseCallbackMemoRefPage';
import { Layout } from './components/Layout';

import { AuthProvider } from './Context/AuthContext';

const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='state' element={<UseStatePage />} />
					<Route path='effect' element={<UseCaseAnimation />} />
					<Route path='context' element={<UseContextPage />} />
					<Route path='reducer' element={<UseReducerPage />} />
					<Route
						path='callback-memo-ref'
						element={<UseCallbackMemoRefPage />}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default App;
