import { loadSection } from '$lib/loadmd';

export const load = ({params}) => {
    console.log(params)

    return {
        section: loadSection(params)
    }
}