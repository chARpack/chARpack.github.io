<script>
  import { A, Heading, Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte';

  let spanClass = 'flex-1 ml-3 whitespace-nowrap';

  let site = {
    name: 'chARp',
    href: '/',
    img: '/charp_logo.svg'
  };

  import { onMount } from 'svelte';
  import { load } from './+page.js';

  let sections = [];

  onMount(async () => {
    const data = await load({ params: {} });
    sections = data.sections;
  });

  const forceUpdate = async (_) => {};
</script>

{#await forceUpdate(0) then}
<div class="columns-2">
  <div>
    <Sidebar>
      <SidebarWrapper class="dark:bg-gray-900">
        <SidebarGroup>
          <SidebarBrand {site} />
        </SidebarGroup>
        {#each sections as section}
          <SidebarGroup>
          <Heading tag="h4"><A data-sveltekit-reload="" class="text-gray-700 dark:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
          {#each section.dictionaries as page}
            <SidebarItem data-sveltekit-reload="" label={page.metadata.title} href={page.absRoute} class="hover:no-underline">
            </SidebarItem>
          {/each}
          </SidebarGroup>
        {/each}
      </SidebarWrapper>
    </Sidebar>
  </div>
  <div class="bg-gray-100 dark:bg-gray-700  px-6">
    <main>
      <slot />
    </main>
  </div>
</div>
{/await}