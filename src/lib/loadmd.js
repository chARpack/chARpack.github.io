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

    console.log("LoadFullTree");

    pages.forEach(page => {
        const section = page.path.split('/').slice(-2)[0];
        const sectionNeat = formatSectionString(section);
        const section_prio = section.split('-')[0];
        // const route = '/' + page.path.split('/').slice(-2).join('/').toLowerCase();
        const route = page.key.replace('.md', '');
        const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
        const overall_prio = section_prio + file_prio;

        page['section'] = section;
        page['sectionTitle'] = sectionNeat;
        page['route'] = route;
        page['prio'] = overall_prio;

        console.log(page);
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

    console.log(groupedBySection);

    let sections = Object.keys(groupedBySection).map(function(section) {
        return {
            name: section,
            dictionaries: groupedBySection[section],
        };
    });

    return sections;
}

export function loadSection(section) {

    //const allPages = import.meta.globEager('./*.md');
    const allPages = import.meta.globEager('/src/routes/manual/' +section+  '/*.md');
    let pages = globToArray(allPages);

    pages.forEach(page => {
        const section = page.path.split('/').slice(-2)[0];
        const sectionNeat = formatSectionString(section);
        const section_prio = section.split('-')[0];
        // const route = '/' + page.path.split('/').slice(-2).join('/').toLowerCase();
        const route = page.key.replace('.md', '');
        const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
        const overall_prio = section_prio + file_prio;

        page['section'] = section;
        page['sectionTitle'] = sectionNeat;
        page['route'] = route;
        page['prio'] = overall_prio;

        console.log("LoadSection");
        console.log(page);
    });
    // sort by prio
    pages.sort(comparePrio);

    return pages;
}

export function loadPage(page) {

    //const allPages = import.meta.globEager('./*.md');
    const page = import.meta.globEager('/src/routes/manual/' + page);

    console.log("LoadPage");
    console.log(page);

    const section = page.path.split('/').slice(-2)[0];
    const sectionNeat = formatSectionString(section);
    const section_prio = section.split('-')[0];
    // const route = '/' + page.path.split('/').slice(-2).join('/').toLowerCase();
    const route = page.key.replace('.md', '');
    const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
    const overall_prio = section_prio + file_prio;

    page['section'] = section;
    page['sectionTitle'] = sectionNeat;
    page['route'] = route;
    page['prio'] = overall_prio;

    console.log(page);

    return page;
}