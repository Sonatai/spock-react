import { nanoid } from 'nanoid';

import { Feature, IFeature } from '../../components/Feature/Feature';

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
			<div className='w-8/12 px-6 py-[2rem]'>
				<h1>{title}</h1>

				<div>
					<>Class Name</>
					<pre>{libClassName}</pre>
				</div>

				<h2>Description</h2>
				<pre className='whitespace-pre-line'>{narrative}</pre>

				<h2>Features</h2>
				{features.map((feature) => (
					<>
						<Feature blocks={feature.blocks} id={feature.id} key={nanoid()} />
					</>
				))}
			</div>
			<div
				className={`
					z-20 block 
					overflow-y-scroll
					w-2/12
					py-[2rem]
					`}>
				<h5>On the Page</h5>
				<nav>
					<ul className='text-[0.875rem]'>
						{features.map((feature) => (
							<li className='pb-[0.5rem]'>
								<a href={`#${feature.id}`}>{feature.id}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
