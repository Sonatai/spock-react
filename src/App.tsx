import { Link, Route, Routes } from 'react-router-dom';

import exampleJson from './assets/doc/pages/Example_Spec.Example_Spec.json';
import tensorExceptionJson from './assets/doc/pages/ut.tensors.exceptions.Tensor_Exception_Spec.json';
import { Header } from './components/Header/Header';
import { Container } from './components/shared/Container';
import { Docu } from './pages/Docu/Docu';
import { Start } from './pages/Start/Start';

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
					py-[2rem]
					`}>
					<h5>Examples</h5>
					<br />
					<nav>
						<ul className='text-[0.875rem]'>
							<li className='pb-[0.5rem]'>
								<Link to='/'>Home</Link>
							</li>
							<li className='pb-[0.5rem]'>
								<Link to='example_one'>Example 1</Link>
							</li>
							<li className='pb-[0.5rem]'>
								<Link to='example_two'>Example 2 - tensor exception</Link>
							</li>
						</ul>
					</nav>
				</div>

				<Routes>
					<Route path='/' element={<Start />} />
					<Route
						path='example_one'
						element={
							<Docu
								features={exampleJson.features}
								libClassName={exampleJson.className}
								narrative={exampleJson.narrative}
								title={exampleJson.title}
							/>
						}
					/>
					<Route
						path='example_two'
						element={
							<Docu
								features={tensorExceptionJson.features}
								libClassName={tensorExceptionJson.className}
								narrative={tensorExceptionJson.narrative}
								title={tensorExceptionJson.title}
							/>
						}
					/>
				</Routes>
			</Container>
		</>
	);
};
