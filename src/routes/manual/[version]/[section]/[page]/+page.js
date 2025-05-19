import { versionstore } from '$lib/stores/versionstorage';

export async function load({ params, url }) {
    const { section, page } = params;
    const version = versionstore;
  
    const mdPath = `/src/routes/manual/${version}/${section}/${page}.md`;
  
    const modules = import.meta.glob('/src/routes/manual/*/*/*.md');
  
    const loader = modules[mdPath];
  
    if (!loader) {
      return {
        status: 404,
        error: new Error(`Page not found: ${mdPath}`)
      };
    }
  
    const mod = await loader();
  
    return {
      content: mod.default,
      metadata: mod.metadata
    };
  }