import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

const getSpec = async (file: string) => {
	var data = await axios.get(
		`https://raw.githubusercontent.com/Gleethos/neureka/master/docs/spock/reports/${file}.json`
	);

	return data.data;
};

interface Spec {
	className: string;
	statistics: {
		runs: string;
		passed: string;
		failed: string;
		featureFailures: string;
		successRate: string;
		duration: string;
	};
	title: string;
	narrative: string;
	headers: string[];
	tags: any;
	see: any[];
	features: {
		id: string;
		result: string;
		duration: string;
		iterations: {
			tags: any;
			see: any[];
			extraInfo: any[];
		};
		blocks: {
			kind: string;
			text: string;
			code: string[];
		}[];
		problems: any[];
	}[];
	generator: string;
}

interface IGetSpec {
	fileName: string;
}

export const useGetSpec = (props: IGetSpec) => {
	const { fileName } = props;

	const result = useQuery<Spec>([fileName], () => getSpec(fileName), {
		cacheTime: 60 * 60 * 24,
		staleTime: 60 * 60 * 24,
	});

	return result;
};
