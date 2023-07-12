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

<Sidebar class="fixed min-[1560px]:left-10 top-10 left-0 z-0 lg:w-64 md:w-auto h-screen transition-transform -translate-x-full lg:translate-x-0">
  <SidebarWrapper class="dark:bg-[#4b5563] bg-[#d1d5db]">
    <SidebarGroup class="list-none">
      <SidebarBrand class="dark:bg-[#374151] text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
    </SidebarGroup>
    {#each sections as section}
      <SidebarGroup class="list-none">
      <Heading tag="h4"><A data-sveltekit-reload="" class="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
      {#each section.pages as page}
        <SidebarItem data-sveltekit-reload="" label={page.metadata.title} href={page.absRoute} class="hover:no-underline">
        </SidebarItem>
      {/each}
      </SidebarGroup>
    {/each}
  </SidebarWrapper>
</Sidebar>

<div class="dark:bg-[#4b5563] bg-[#d1d5db] 2xl:w-full xl:w-5/6 lg:w-4/6 md:w-full mx-auto bg-gray-100 dark:bg-gray-700 px-6 rounded-lg pb-10 pt-2 z-20">
  <main>
    <slot />
  </main>
</div>
