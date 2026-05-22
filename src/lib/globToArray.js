const getPath = (filePath, prefix = '') => {
	const regex = /([\/\w\-]+?)(\/index)?\.\w+/;
	return prefix + filePath.match(regex)[1];
};

const globToArray = (glob) => {
	const array = Object.keys(glob).map((key) => {
		const path = getPath(key);
		const post = glob[key];
		return {
			key,
			path,
			...post,
		};
	});

	return array;
};

export default globToArray;
