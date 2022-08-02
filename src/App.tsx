import { Link, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Container } from './components/shared/Container';
import { Start } from './pages/Start/Start';
import { Testerino } from './pages/Testerino/Testerino';

export const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<Container>
				<div
					className={`
					z-20 block 
					overflow-y-scroll
					w-2/12
					`}>
					<h2>Blah</h2>
					<br />
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='test'>Testerino</Link>
							</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					</nav>
					<br />
					<h2>Wagh</h2>
					<br />
					<nav>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					</nav>
				</div>
				<div className='w-8/12 px-6 py-4'>
					<Routes>
						<Route path='/' element={<Start />} />
						<Route path='test' element={<Testerino />} />
					</Routes>
				</div>
				<div
					className={`
					z-20 block 
					overflow-y-scroll
					w-2/12
					`}>
					<h2>Blah</h2>
					<br />
					<nav>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					</nav>
				</div>
			</Container>
		</>
	);
};

/*
className === unique key for spec
executedFeatures === unique key for test
feature.id === unique key for test
kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE
#ff3f81
*/
