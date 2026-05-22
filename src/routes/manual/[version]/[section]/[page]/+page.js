import { getPageFromMDPath, loadFullTreeVersionManual } from '$lib/loadmd';
import { error } from '@sveltejs/kit';

/**
 * Normalize a pathname by removing trailing slashes for consistent comparison.
 * @param {string} pathname - The URL pathname to normalize
 * @returns {string} Normalized pathname
 */
function normalizePathname(pathname) {
	return pathname.replace(/\/$/, '') || '/';
}

export async function load({ params, url }) {
	const { version, section, page } = params;

	// Validate parameters
	if (!version || !section || !page) {
		throw error(404, 'Invalid route parameters');
	}

	// Load the full structure of the manual for this version
	const sections = loadFullTreeVersionManual(version);

	// Find the module key matching this page more reliably
	const modules = import.meta.glob('/src/routes/manual/*/**/**/*.md', { eager: false });
	const moduleKeys = Object.keys(modules);

	// Build expected path patterns to find the right module
	const expectedPathPattern = `/src/routes/manual/${version}/${section}/${page}.md`;
	const mdKey = moduleKeys.find((key) => key === expectedPathPattern);

	if (!mdKey) {
		throw error(404, `Page not found: ${version}/${section}/${page}`);
	}

	// Load the module
	let mod;
	try {
		mod = await modules[mdKey]();
	} catch (e) {
		throw error(500, `Failed to load page content: ${e.message}`);
	}

	// Get the page info from your tree (for metadata, title, etc.)
	const thisSection = sections.find((sec) => sec.name === section);
	if (!thisSection) throw error(404, `Section not found: ${section}`);

	const pageContent = thisSection.pages.find((p) => p.pageRoute === page);
	if (!pageContent) throw error(404, `Page content not found: ${page}`);

	// Flatten all pages in order for prev/next navigation
	const pageList = sections.flatMap((s) => s.pages);

	// Normalize URLs to avoid trailing slash mismatches
	const normalizedPath = normalizePathname(url.pathname);
	const index = pageList.findIndex((p) => normalizePathname(p.absRoute) === normalizedPath);

	const prev = index > 0 ? pageList[index - 1] : null;
	const next = index < pageList.length - 1 ? pageList[index + 1] : null;

	return {
		content: mod.default,
		// Markdown content (or compiled Svelte component if using mdsvex)
		metadata: mod.metadata || {},
		// Optional metadata from the MD file
		version,
		section,
		page,
		thisPage: getPageFromMDPath(mdKey),
		sections,
		pageContent,
		prev,
		next,
	};
}
