import { loadFullTreeVersionManual } from '$lib/loadmd';
import { getAvailableVersions } from '$lib/getversions';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
	const { version } = params;

	const versions = getAvailableVersions();

	// Validate version - if invalid, redirect to first available version
	if (!versions.includes(version)) {
		if (versions.length > 0) {
			throw error(404, `Version '${version}' not found`);
		}
		throw error(404, 'No manual versions available');
	}

	try {
		const sections = loadFullTreeVersionManual(version);
		return { sections, versions, version };
	} catch (err) {
		throw error(500, `Failed to load manual: ${err.message}`);
	}
}
