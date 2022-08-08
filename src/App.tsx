import { nanoid } from 'nanoid';
import { Link, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Container } from './components/shared/Container';
import { useGetSummary } from './Hooks/useGetSummary';
import { Docu } from './pages/Docu/Docu';
import { Start } from './pages/Start/Start';

export const App = (): JSX.Element => {
	const { data: summary, isLoading, isError } = useGetSummary();

	return (
		<>
			<Header />
			<Container>
				<div
					className={`
					sideNavBar
					w-2/12
					
					`}>
					<h5>Examples</h5>
					<nav>
						<ul className='text-[0.875rem]'>
							<li className='pb-[0.5rem]'>
								<Link to='/'>Home</Link>
							</li>

							{summary?.specifications.map((spec) => (
								<li className='pb-[0.5rem]' key={nanoid()}>
									<Link to={spec.className}>
										{spec.title || spec.className}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<Routes>
					<Route path='/' element={<Start />} />
					{summary?.specifications.map((spec) => (
						<Route
							path={spec.className}
							element={<Docu fileName={spec.className} />}
							key={nanoid()}
						/>
					))}
				</Routes>
			</Container>
		</>
	);
};
