import { nanoid } from 'nanoid';
import { Link, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { SearchInput } from './components/Search/SearchInput';
import { Container } from './components/shared/Container';
import { useGetSummary } from './Hooks/useGetSummary';
import { Document } from './pages/Docu/Document';
import { Start } from './pages/Start/Start';

export const App = (): JSX.Element => {
	const { data: summary } = useGetSummary();

	return (
		<>
			<Header />
			<Container>
				{summary && (
					<div
						className={`
					sideNavBar
					w-2/12
					
					`}>
						<SearchInput summary={summary} />
						<h5>Examples</h5>
						<nav>
							<ul className='text-[0.875rem]'>
								<li className='pb-[0.5rem]'>
									<Link to='/'>Home</Link>
								</li>

								{summary.specifications.map((spec) => (
									<li className='pb-[0.5rem]' key={nanoid()}>
										<Link to={spec.className}>
											{spec.title || spec.className}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				)}

				<Routes>
					<Route path='/' element={<Start />} />
					{summary?.specifications.map((spec) => (
						<Route
							path={spec.className}
							element={<Document fileName={spec.className} />}
							key={nanoid()}
						/>
					))}
				</Routes>
			</Container>
		</>
	);
};
