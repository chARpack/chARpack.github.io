import globToArray from '$lib/globToArray';
import path from 'path';


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

export function loadFullTreeManual() {
    //const allPages = import.meta.globEager('./**/[0-9]*.md');
    const allPages = import.meta.globEager('/src/routes/manual/**/*.md');
    let pages = globToArray(allPages);

    //console.log("LoadFullTree");

    const newPages = [];

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

        // Fetch the contents of the Markdown file using `fetch`
        // const markdownUrl = new URL(page.key, import.meta.env.VITE_APP_BASE_URL);
        // const response = await fetch(markdownUrl);
        // const fileContents = await response.text();
        // Read the contents of the Markdown file
        // const filePath = path.join(process.cwd(), page.key);
        // const fileContents = readFileSync(filePath, 'utf-8');

        // // Extract the `##` headings from the HTML using a regular expression
        // const regex = /^## (.*)$/gm;
        // const headings = [];
        // let match;
        // while ((match = regex.exec(fileContents))) {
        //     headings.push(match[1]);
        // }

        // page['subsections'] = headings;

        // page = Object.fromEntries(
        //     Object.entries(page).filter(([key]) => typeof key !== 'symbol')
        // );
        // Object.keys(page).forEach(key => {
        //     if (page[key] === 'Module') {
        //       delete page[key];
        //     }
        // });

        newPages.push(page);

        //console.log(page);
    });

    //console.log(newPages);
    // sort by prio
    newPages.sort(comparePrio);



    // group by page
    // Group the dictionaries by section using Array.reduce()
    let groupedBySection = newPages.reduce(function(acc, cur) {
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
            pages: groupedBySection[section],
        };
    });

    //console.log(sections[0].dictionaries);

    return sections;
}

export function loadFullTreeVersionManual(selectedVersion) {
    const allPages = import.meta.globEager('/src/routes/manual/*/**/*.md');
    let pages = Object.entries(allPages)

    .filter(([path]) => path.includes(`/manual/${selectedVersion}/`))
    .map(([path, mod]) => ({
        path,
        ...mod
    }));

    const newPages = [];

    pages.forEach(page => {
        const section = page.path.split('/').slice(-2)[0];
        const sectionNeat = formatSectionString(section);
        const section_prio = section.split('-')[0];
        const fullRoute = page.path.replace('.md', '');
        const absRoute = '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
        const route = fullRoute.split('/').slice(-2)[0] + '/' + fullRoute.split('/').slice(-1)[0];
        const pageRoute = fullRoute.split('/').slice(-1)[0];
        const absSectionRoute =  '/' + fullRoute.split('/').slice(-4)[0] + '/' + fullRoute.split('/').slice(-3)[0] + '/' + fullRoute.split('/').slice(-2)[0];
        const file_prio = page.path.split('/').slice(-1)[0].split('-')[0];
        const overall_prio = section_prio + file_prio;

        page['section'] = section;
        page['sectionTitle'] = sectionNeat;
        page['absRoute'] = absRoute;
        page['route'] = route;
        page['pageRoute'] = pageRoute;
        page['absSectionRoute'] = absSectionRoute;
        page['prio'] = overall_prio;
        newPages.push(page);
    });

    // sort by prio
    newPages.sort(comparePrio);



    // group by page
    // Group the dictionaries by section using Array.reduce()
    let groupedBySection = newPages.reduce(function(acc, cur) {
        let section = cur.section;
        if (!(section in acc)) {
            acc[section] = [];
        }
        acc[section].push(cur);
        return acc;
    }, {});

    //console.log(groupedBySection);

    let sections = Object.keys(groupedBySection).map(function(section) {
        // console.log('/manual/' + selectedVersion + '/' + section);
        return {
            name: section,
            title: formatSectionString(section),
            absRoute: '/manual/' + selectedVersion + '/' + section,
            pages: groupedBySection[section],
        };
    });

    //console.log(sections[0].dictionaries);

    return sections;
}


// params has key section
export function loadSectionManual(params) {

    let sections = loadFullTreeManual();

    // let pages;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) pages = sec;
    // });
    // return pages;

    let pages = sections.filter(sec => {return sec.name === params.section})[0];

    return pages;
}


// params has keys section and page
export function loadPageManual(params) {

    let sections = loadFullTreeManual();
    // let returnPage;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) {
    //         sec.dictionaries.forEach(p => {
    //             console.log(params.page);
    //             if (p.pageRoute == params.page) returnPage = p;
    //         });
    //     }
    // });
    let returnPage = sections.filter(sec => {return sec.name === params.section})[0].pages.filter(p => {return p.pageRoute === params.page})[0];

    return returnPage;
}


// DEVELOPMENT

export function loadFullTreeDevelopment() {
    //const allPages = import.meta.globEager('./**/[0-9]*.md');
    const allPages = import.meta.globEager('/src/routes/development/**/*.md');
    let pages = globToArray(allPages);

    //console.log("LoadFullTree");

    const newPages = [];

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

        // Fetch the contents of the Markdown file using `fetch`
        // const markdownUrl = new URL(page.key, import.meta.env.VITE_APP_BASE_URL);
        // const response = await fetch(markdownUrl);
        // const fileContents = await response.text();
        // Read the contents of the Markdown file
        // const filePath = path.join(process.cwd(), page.key);
        // const fileContents = readFileSync(filePath, 'utf-8');

        // // Extract the `##` headings from the HTML using a regular expression
        // const regex = /^## (.*)$/gm;
        // const headings = [];
        // let match;
        // while ((match = regex.exec(fileContents))) {
        //     headings.push(match[1]);
        // }

        // page['subsections'] = headings;

        // page = Object.fromEntries(
        //     Object.entries(page).filter(([key]) => typeof key !== 'symbol')
        // );
        // Object.keys(page).forEach(key => {
        //     if (page[key] === 'Module') {
        //       delete page[key];
        //     }
        // });

        newPages.push(page);

        //console.log(page);
    });

    //console.log(newPages);
    // sort by prio
    newPages.sort(comparePrio);



    // group by page
    // Group the dictionaries by section using Array.reduce()
    let groupedBySection = newPages.reduce(function(acc, cur) {
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
            absRoute: '/development/' + section,
            pages: groupedBySection[section],
        };
    });

    //console.log(sections[0].dictionaries);

    return sections;
}

// params has key section
export function loadSectionDevelopment(params) {

    let sections = loadFullTreeDevelopment();

    // let pages;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) pages = sec;
    // });
    // return pages;

    let pages = sections.filter(sec => {return sec.name === params.section})[0];

    return pages;
}


// params has keys section and page
export function loadPageDevelopment(params) {

    let sections = loadFullTreeDevelopment();
    // let returnPage;
    // sections.forEach(sec => {
    //     if (sec.name == params.section) {
    //         sec.dictionaries.forEach(p => {
    //             console.log(params.page);
    //             if (p.pageRoute == params.page) returnPage = p;
    //         });
    //     }
    // });
    let returnPage = sections.filter(sec => {return sec.name === params.section})[0].pages.filter(p => {return p.pageRoute === params.page})[0];

    return returnPage;
}