import { loadFullTree } from '$lib/loadmd';

export const load = ({params}) => {
    console.log(params)

    return {
        sections: loadFullTree()
    }
}