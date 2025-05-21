import { loadFullTreeVersionManual } from '$lib/loadmd';
import { error } from '@sveltejs/kit';

export async function load({params}) {
    const version = params.version;

    const sections = loadFullTreeVersionManual(version);
    const section = sections.find((sec) => sec.name === params.section);
    if (!section) {
        throw error(404, 'Section not found');
    }

    return {
        section
    };
}
