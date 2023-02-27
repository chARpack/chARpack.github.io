import { loadPage } from '$lib/loadmd';
import { page } from '$app/stores';

export async function load({ params }) {
    console.log("Load Page params")
    console.log(params)
    console.log(page)
    try {
      const page = await loadPage(params);
      return { page };
    } catch (error) {
      console.error(error);
      return { page: [] }; // Return an empty array if there's an error
    }
}