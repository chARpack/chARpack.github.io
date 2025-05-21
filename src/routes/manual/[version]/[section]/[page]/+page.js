import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
  const { version, section, page } = params;

  const mdPath = `/src/routes/manual/${version}/${section}/${page}.md`;
  const modules = import.meta.glob('/src/routes/manual/*/*/*.md');
  //const modules = import.meta.globEager('/src/routes/manual/*/**/*.md');

  console.log('Modules', modules)
  console.log('Looking for', mdPath);
  console.log('Matches:', Object.keys(modules).includes(mdPath));

  const loader = modules[mdPath];

  if (!loader) {
    throw error(404, `Page not found: ${mdPath}`);
  }

  const mod = await loader();

  return {
    content: mod.default,
    metadata: mod.metadata
  };
}