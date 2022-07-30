import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start/Start';
import { Testerino } from './pages/Testerino/Testerino';

export const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Start />} />
			<Route path='test' element={<Testerino />} />
		</Routes>
	);
};
