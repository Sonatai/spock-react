import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

const getSummary = async () => {
	var data = await axios.get(
		`https://raw.githubusercontent.com/Gleethos/neureka/master/docs/spock/reports/summary.json`
	);

	return data.data;
};

export interface ISpecification {
	className: string;
	title: string;
	narrative: string;
	featureCount: string;
	failures: string;
	errors: string;
	skipped: string;
	successRate: string;
	duration: string;
	executedFeatures: {
		id: string;
		extraInfo: any[];
	}[];
	ignoredFeatures: any[];
}

export interface ISummary {
	generator: string;
	project: string;
	version: string;
	created: string;
	statistics: {
		runs: string;
		passed: string;
		failed: string;
		featureFailures: string;
		successRate: string;
		duration: string;
	};
	specifications: ISpecification[];
}

export const useGetSummary = () => {
	const result = useQuery<ISummary>(['summary'], () => getSummary(), {
		cacheTime: 60 * 60 * 24,
		staleTime: 60 * 60 * 24,
	});

	return result;
};
