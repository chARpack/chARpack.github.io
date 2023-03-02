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

<Sidebar class="fixed top-10 left-10 z-40 lg:w-64 md:w-auto h-screen transition-transform -translate-x-full sm:translate-x-0">
  <SidebarWrapper class="dark:bg-gray-900">
    <SidebarGroup class="list-none">
      <SidebarBrand class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
    </SidebarGroup>
    {#each sections as section}
      <SidebarGroup class="list-none">
      <Heading tag="h4"><A data-sveltekit-reload="" class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
      {#each section.pages as page}
        <SidebarItem data-sveltekit-reload="" label={page.metadata.title} href={page.absRoute} class="hover:no-underline">
        </SidebarItem>
      {/each}
      </SidebarGroup>
    {/each}
  </SidebarWrapper>
</Sidebar>

<div class="xl:w-full lg:w-4/6 md:w-3/6 flex mx-auto bg-gray-100 dark:bg-gray-700 px-6 rounded-lg pb-10 pt-2">
  <main>
    <slot />
  </main>
</div>
