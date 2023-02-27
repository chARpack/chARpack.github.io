import { loadPage } from '$lib/loadmd';
import { page } from '$app/stores';

export async function load({ params }) {
    try {
      const page = await loadPage(params);
      return { page };
    } catch (error) {
      console.error(error);
      return { page: [] }; // Return an empty array if there's an error
    }
}