import { loadFullTreeDevelopment } from '$lib/loadmd';

export function load() {
    try {
      const sections = loadFullTreeDevelopment();
      return { sections };
    } catch (error) {
      console.error(error);
      return { sections: [] }; // Return an empty array if there's an error
    }
}