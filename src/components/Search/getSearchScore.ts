export const getSearchScore = (searchInput: string, keywords: string[]) => {
	let score = 0;

	const searchInputs = searchInput
		.split(' ')
		.filter((word) => word?.length > 0);

	searchInputs.forEach((word) => {
		if (keywords.indexOf(word) !== -1) {
			score += keywords.indexOf(word);
		}
	});

	return score;
};
