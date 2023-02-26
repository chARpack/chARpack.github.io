<script>
  import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte';

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

</script>

<div class="app columns-2 max-w-full">
  <div>
    <Sidebar>
      <SidebarWrapper class="dark:bg-gray-900">
        <SidebarGroup>
          <SidebarBrand {site} />
        </SidebarGroup>
        <!-- {#each sections as section}
          <SidebarGroup>
          <h3>{section.name}</h3>
          {#each section.dictionaries as page}
            <SidebarItem label={page.metadata.title} href={page.route}>
            </SidebarItem>
          {/each}
          </SidebarGroup>
        {/each} -->
      </SidebarWrapper>
    </Sidebar>
  </div>
  <div>
    <main>
      <slot />
    </main>
  </div>
</div>

