import { loadFullTreeVersionManual } from '$lib/loadmd';

export function load() {
    try {
      const sections = loadFullTreeVersionManual();
      return { sections };
    } catch (error) {
      console.error(error);
      return { sections: [] }; // Return an empty array if there's an error
    }
}