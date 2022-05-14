import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './components/Admin';
import { AdminPage } from './components/AdminPage';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { UserContext } from './contexts/UserContext';
import { GlobalStyle } from './style';

export const App = () => {
	let name = '';
	let token = '';

	const userStringify = localStorage.getItem('user');
	if (userStringify) {
		const userLocal = JSON.parse(userStringify);
		name = userLocal.name;
		token = userLocal.token;
	}

	const [user, setUser] = useState({
		name,
		token,
		tokenAdmin: ''
	});

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<SignIn />} />
						<Route path='/cadastro' element={<SignUp />} />
						<Route path='/homepage' element={<Home />} />
						<Route path='/admin' element={<Admin />} />
						<Route path='/admin-page' element={<AdminPage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
};