import { loadFullTree } from '$lib/loadmd';

export async function load({ params }) {
    try {
      const sections = await loadFullTree();
      return { sections };
    } catch (error) {
      console.error(error);
      return { sections: [] }; // Return an empty array if there's an error
    }
}