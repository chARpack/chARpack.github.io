import globToArray from '$lib/globToArray';

// Comparison function to sort by priority
function comparePrio(a, b) {
    return a.prio - b.prio;
}

function formatSectionString(s) {
    // remove number in front
    const sec = s.split('-')[1];
    // split the string into an array of words
    const words = sec.split('_');
    // capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // join the words back together with a space
    const formattedString = capitalizedWords.join(" ");
    return formattedString;
}

export function loadFullTree() {
    //const allPages = import.meta.globEager('./**/[0-9]*.md');
    const allPages = import.meta.globEager('/src/routes/manual/**/*.md');
    let pages = globToArray(allPages);

    //console.log("LoadFullTree");

    pages.forEach(page => {
        const section = page.path.split('/').slice(-2)[0];
        const sectionNeat = formatSectionString(section);
        const section_prio = section.split('-')[0];
        // const route = '/' + page.path.split('/').slice(-2).join('/').toLowerCase();
        const fullRoute = page.key.replace('.md', '');
        const absRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
        const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
        const pageRoute = fullRoute.split('/').slice(-1)[0];
        const absSectionRoute = '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
        const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
        const overall_prio = section_prio + file_prio;

        page['section'] = section;
        page['sectionTitle'] = sectionNeat;
        page['absRoute'] = absRoute;
        page['route'] = route;
        page['pageRoute'] = pageRoute;
        page['absSectionRoute'] = absSectionRoute;
        page['prio'] = overall_prio;

        //console.log(page);
    });
    // sort by prio
    pages.sort(comparePrio);

    // group by page
    // Group the dictionaries by section using Array.reduce()
    let groupedBySection = pages.reduce(function(acc, cur) {
        let section = cur.section;
        if (!(section in acc)) {
            acc[section] = [];
        }
        acc[section].push(cur);
        return acc;
    }, {});

    //console.log(groupedBySection);

    let sections = Object.keys(groupedBySection).map(function(section) {
        return {
            name: section,
            title: formatSectionString(section),
            absRoute: '/manual/' + section,
            dictionaries: groupedBySection[section],
        };
    });

    return sections;
}

// params has key section
export function loadSection(params) {

    let sections = loadFullTree();

    // let pages;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) pages = sec;
    // });
    // return pages;

    let pages = sections.filter(sec => {return sec.name === params.section})[0];

    return pages;
}


// params has keys section and page
export function loadPage(params) {

    let sections = loadFullTree();
    // let returnPage;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) {
    //         sec.dictionaries.forEach(p => {
    //             console.log(params.page);
    //             if (p.pageRoute == params.page) returnPage = p;
    //         });
    //     }
    // });
    let returnPage = sections.filter(sec => {return sec.name === params.section})[0].dictionaries.filter(p => {return p.pageRoute === params.page})[0];

    return returnPage;
}