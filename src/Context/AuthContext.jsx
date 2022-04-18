import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [login, setLogin] = useState(null);
	const signIn = newUser => {
		setLogin(newUser);
	};
	const signOut = () => {
		setLogin(null);
	};

	const value = { login, signIn, signOut };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
