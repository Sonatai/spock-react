import React from 'react';
import ReactDOM from 'react-dom/client';
import { Start } from './pages/Start/Start';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename='/test-github-pages'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
