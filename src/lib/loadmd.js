import globToArray from '$lib/globToArray';

// Comparison function to sort by priority
function comparePrio(a, b) {
	return a.prio - b.prio;
}

function formatSectionString(s) {
	// remove number in front
	const sec = s.split('-')[1];
	// split the string into an array of words
	const words = sec.split('_');
	// capitalize the first letter of each word
	const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	// join the words back together with a space
	const formattedString = capitalizedWords.join(' ');
	return formattedString;
}

/**
 * Load all manual pages with their metadata and structure.
 * @returns {Array} Array of sections with their pages
 */
export function loadFullTreeManual() {
	const allPages = import.meta.globEager('/src/routes/manual/**/*.md');
	let pages = globToArray(allPages);

	const newPages = [];

	pages.forEach((page) => {
		const section = page.path.split('/').slice(-2)[0];
		const sectionNeat = formatSectionString(section);
		const section_prio = section.split('-')[0];
		const fullRoute = page.key.replace('.md', '');
		const absRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const pageRoute = fullRoute.split('/').slice(-1)[0];
		const absSectionRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
		const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
		const overall_prio = section_prio + file_prio;

		page['section'] = section;
		page['sectionTitle'] = sectionNeat;
		page['absRoute'] = absRoute;
		page['route'] = route;
		page['pageRoute'] = pageRoute;
		page['absSectionRoute'] = absSectionRoute;
		page['prio'] = overall_prio;

		newPages.push(page);
	});

	// sort by prio
	newPages.sort(comparePrio);

	// group by page
	// Group the dictionaries by section using Array.reduce()
	let groupedBySection = newPages.reduce(function (acc, cur) {
		let section = cur.section;
		if (!(section in acc)) {
			acc[section] = [];
		}
		acc[section].push(cur);
		return acc;
	}, {});

	let sections = Object.keys(groupedBySection).map(function (section) {
		return {
			name: section,
			title: formatSectionString(section),
			absRoute: '/manual/' + section,
			pages: groupedBySection[section],
		};
	});

	return sections;
}

/**
 * Load all manual pages for a specific version with their metadata and structure.
 * @param {string} selectedVersion - The manual version to load (e.g., 'master')
 * @returns {Array} Array of sections with their pages for the specified version
 */
export function loadFullTreeVersionManual(selectedVersion) {
	if (typeof selectedVersion !== 'string' || selectedVersion.trim() === '') {
		return [];
	}
	const allPages = import.meta.globEager('/src/routes/manual/*/**/*.md');
	let pages = Object.entries(allPages)
		.filter(([path]) => path.includes(`/manual/${selectedVersion}/`))
		.map(([path, mod]) => ({
			path,
			...mod,
		}));

	const newPages = [];

	pages.forEach((page) => {
		const section = page.path.split('/').slice(-2)[0];
		const sectionNeat = formatSectionString(section);
		const section_prio = section.split('-')[0];
		const fullRoute = page.path.replace('.md', '');
		const absRoute = '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const pageRoute = fullRoute.split('/').slice(-1)[0];
		const absSectionRoute = '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
		const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
		const overall_prio = section_prio + file_prio;

		page['section'] = section;
		page['sectionTitle'] = sectionNeat;
		page['absRoute'] = absRoute;
		page['route'] = route;
		page['pageRoute'] = pageRoute;
		page['absSectionRoute'] = absSectionRoute;
		page['prio'] = overall_prio;
		newPages.push(page);
	});

	// sort by prio
	newPages.sort(comparePrio);

	// group by page
	// Group the dictionaries by section using Array.reduce()
	let groupedBySection = newPages.reduce(function (acc, cur) {
		let section = cur.section;
		if (!(section in acc)) {
			acc[section] = [];
		}
		acc[section].push(cur);
		return acc;
	}, {});

	let sections = Object.keys(groupedBySection).map(function (section) {
		return {
			name: section,
			title: formatSectionString(section),
			absRoute: '/manual/' + selectedVersion + '/' + section,
			pages: groupedBySection[section],
		};
	});

	return sections;
}

/**
 * Get page info from markdown path.
 * @param {string} mdPath - The path to the markdown file
 * @returns {Object} Page metadata and route information
 */
export function getPageFromMDPath(mdPath) {
	const section = mdPath.split('/').slice(-2)[0];
	const sectionNeat = formatSectionString(section);
	const section_prio = section.split('-')[0];
	const fullRoute = mdPath.replace('.md', '');
	const absRoute = '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
	const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
	const pageRoute = fullRoute.split('/').slice(-1)[0];
	const absSectionRoute = '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
	const file_prio = mdPath.split('/').slice(-1)[0].split('-')[0];
	const overall_prio = section_prio + file_prio;

	let page = {};
	page['section'] = section;
	page['sectionTitle'] = sectionNeat;
	page['absRoute'] = absRoute;
	page['route'] = route;
	page['pageRoute'] = pageRoute;
	page['absSectionRoute'] = absSectionRoute;
	page['prio'] = overall_prio;
	return page;
}

/**
 * Load a specific section from the manual.
 * @param {{section: string}} params - Parameters containing the section name
 * @returns {Object|null} Section data with pages, or null if not found
 */
export function loadSectionManual(params) {
	const sections = loadFullTreeManual();
	return sections.find((sec) => sec.name === params.section) || null;
}

/**
 * Load a specific page from the manual.
 * @param {{section: string, page: string}} params - Parameters containing the section and page name
 * @returns {Object|null} Page data, or null if not found
 */
export function loadPageManual(params) {
	const section = loadSectionManual(params);
	if (!section) return null;
	return section.pages.find((p) => p.pageRoute === params.page) || null;
}

/**
 * Load all development pages with their metadata and structure.
 * @returns {Array} Array of sections with their pages
 */
export function loadFullTreeDevelopment() {
	const allPages = import.meta.globEager('/src/routes/development/**/*.md');
	let pages = globToArray(allPages);

	const newPages = [];

	pages.forEach((page) => {
		const section = page.path.split('/').slice(-2)[0];
		const sectionNeat = formatSectionString(section);
		const section_prio = section.split('-')[0];
		const fullRoute = page.key.replace('.md', '');
		const absRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
		const pageRoute = fullRoute.split('/').slice(-1)[0];
		const absSectionRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
		const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
		const overall_prio = section_prio + file_prio;

		page['section'] = section;
		page['sectionTitle'] = sectionNeat;
		page['absRoute'] = absRoute;
		page['route'] = route;
		page['pageRoute'] = pageRoute;
		page['absSectionRoute'] = absSectionRoute;
		page['prio'] = overall_prio;

		newPages.push(page);
	});

	// sort by prio
	newPages.sort(comparePrio);

	// group by page
	// Group the dictionaries by section using Array.reduce()
	let groupedBySection = newPages.reduce(function (acc, cur) {
		let section = cur.section;
		if (!(section in acc)) {
			acc[section] = [];
		}
		acc[section].push(cur);
		return acc;
	}, {});

	let sections = Object.keys(groupedBySection).map(function (section) {
		return {
			name: section,
			title: formatSectionString(section),
			absRoute: '/development/' + section,
			pages: groupedBySection[section],
		};
	});

	return sections;
}

/**
 * Load a specific section from the development guide.
 * @param {{section: string}} params - Parameters containing the section name
 * @returns {Object|null} Section data with pages, or null if not found
 */
export function loadSectionDevelopment(params) {
	const sections = loadFullTreeDevelopment();
	return sections.find((sec) => sec.name === params.section) || null;
}

/**
 * Load a specific page from the development guide.
 * @param {{section: string, page: string}} params - Parameters containing the section and page name
 * @returns {Object|null} Page data, or null if not found
 */
export function loadPageDevelopment(params) {
	const section = loadSectionDevelopment(params);
	if (!section) return null;
	return section.pages.find((p) => p.pageRoute === params.page) || null;
}
