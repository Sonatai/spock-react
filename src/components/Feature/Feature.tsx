import React from 'react';

/*
className === unique key for spec
executedFeatures === unique key for test
feature.id === unique key for test
kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE | EXPECT
#ff3f81
*/

export interface IBlock {
	kind: string;
	text: string;
	code: string[];
}

interface IFeature {
	id: string;
	result: string;
	duration: string;
	blocks: IBlock[];
}

export const Feature = (props: IFeature): JSX.Element => {
	const { id, result, duration, blocks } = props;

	return (
		<>
			<h3>{id}</h3>
			<div className='flex'>
				<div className='mr-2'>{result}</div>
				<div>{`Duration: ${duration}`}</div>
			</div>
			<div>
				{blocks.map((block) => (
					<>
						{`${block.kind.toUpperCase()} ${block.text || '----'}`}
						{block.code.length > 0 && <p>{block.code.join('\n')}</p>}
						<br />
					</>
				))}
			</div>
		</>
	);
};
