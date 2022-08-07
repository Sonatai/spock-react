import { nanoid } from 'nanoid';

import { Feature, IFeature } from '../../components/Feature/Feature';
import { Divide } from '../../components/shared/Divide';
import { Layout } from '../../components/shared/Layout';

interface IExampleOne {
	title: string;
	libClassName: string;
	narrative: string;
	features: IFeature[];
}

export const Docu = (props: IExampleOne): JSX.Element => {
	const { title, libClassName, narrative, features } = props;

	return (
		<>
			<Layout
				onPageNav={
					<nav>
						<ul className='text-[0.875rem]'>
							{features.map((feature) => (
								<li className='pb-[0.5rem]'>
									<a href={`#${feature.id}`}>{feature.id}</a>
								</li>
							))}
						</ul>
					</nav>
				}>
				<div className='mb-[3rem]'>
					<h1 className='mb-[0.5rem]'>{title}</h1>

					{`Class name: ${libClassName}`}
				</div>

				<h2>Description</h2>
				<pre className='whitespace-pre-line'>{narrative}</pre>

				<h2>Features</h2>
				{features.map((feature, index) => (
					<>
						<Feature blocks={feature.blocks} id={feature.id} key={nanoid()} />

						{index < features.length - 1 && <Divide />}
					</>
				))}
			</Layout>
		</>
	);
};
