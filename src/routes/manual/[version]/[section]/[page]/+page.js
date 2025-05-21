import { getPageFromMDPath, loadFullTreeVersionManual } from '$lib/loadmd';
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
  const { version, section, page } = params;

  const sections = loadFullTreeVersionManual(version);
  const mdPath = `/src/routes/manual/${version}/${section}/${page}.md`;
  const modules = import.meta.glob('/src/routes/manual/*/*/*.md');
  const thisPage = getPageFromMDPath(mdPath);

  // console.log('Modules', modules)
  // console.log('Looking for', mdPath);
  // console.log('Matches:', Object.keys(modules).includes(mdPath));

  const loader = modules[mdPath];

  if (!loader) {
    throw error(404, `Page not found: ${mdPath}`);
  }

  const mod = await loader();

  let pageContent = sections.filter(sec => {return sec.name === section})[0].pages.filter(p => {return p.pageRoute === page})[0];

  let pageList = sections.flatMap((section) => section.pages);
	let index = pageList.findIndex(({ absRoute }) => absRoute + '/' === url.pathname);
	let prev = pageList[index - 1];
	let next = pageList[index + 1];
  return {
    content: mod.default,
    metadata: mod.metadata,
    version,
    section,
    page,
    thisPage,
    sections,
    pageContent,
    next,
    prev
  };
}