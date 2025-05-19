import { loadFullTreeVersionManual } from '$lib/loadmd';
import { getAvailableVersions } from '$lib/getversions';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
	const { version } = params;
  try {
    const versions = getAvailableVersions();
    // TODO check if version is valid
    const sections = loadFullTreeVersionManual(version);
    return { sections, versions, version };
  } catch (error) {
    console.error(error);
    return { sections: [], versions: [], version };
  }
}