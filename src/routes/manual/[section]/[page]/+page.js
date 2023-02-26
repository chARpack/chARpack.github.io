import { loadPage } from '$lib/loadmd';

export const load = ({params}) => {
    console.log(params)

    return {
        page: loadPage(params)
    }
}