<script>
  import { A, Heading, Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte';
  import { page } from "$app/stores";
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';

  let site = {
    name: 'chARp',
    href: '/',
    img: '/charp_logo.svg'
  };

  let sections = $page.data.sections;

</script>

<Sidebar class="fixed top-10 left-10 z-40 lg:w-64 md:w-auto sm:w-auto h-screen transition-transform -translate-x-full sm:translate-x-0">
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

<div class="lg:w-full md:w-3/6 mx-auto bg-gray-100 dark:bg-gray-700 px-6">
  <main>
    <slot />
  </main>
</div>
