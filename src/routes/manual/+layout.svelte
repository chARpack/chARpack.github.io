<script>
  import { goto } from '$app/navigation';
  import { A, Heading, Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte';
  import { page } from "$app/stores";
  import { get } from 'svelte/store';

  let site = {
    name: 'chARpack',
    href: '/',
    img: '/charpack_logo.svg'
  };

	const currentPage = get(page);
	const currentVersion = currentPage.params.version;
	const section = currentPage.params.section;
	const subPage = currentPage.params.page;

	$: selectedVersion = currentVersion;

	function handleVersionChange(event) {
		const newVersion = event.target.value;

		if (newVersion !== currentVersion) {
			const newPath = `/manual/${newVersion}/${section}/${subPage}`;
			//goto(newPath);
      window.location.href = newPath;
		}
	}

  let sections = $page.data.sections;
  let versions = $page.data.versions;

</script>

<Sidebar class="fixed min-[1560px]:left-10 top-10 left-0 z-0 lg:w-64 md:w-auto h-screen transition-transform -translate-x-full lg:translate-x-0">
  <SidebarWrapper class="dark:bg-gray-900">
    <SidebarGroup class="list-none">
      <SidebarBrand class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
      <select id="dropdown" on:change={handleVersionChange} bind:value={selectedVersion}>
        {#each versions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </SidebarGroup>
    {#each sections as section}
      <SidebarGroup class="list-none" ulClass="space-y-0">
      <Heading tag="h4"><A data-sveltekit-reload="" class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
      {#each section.pages as page}
        <SidebarItem data-sveltekit-reload="" label={page.metadata.title} href="/manual/{selectedVersion}/{page.route}" class="hover:no-underline">
        </SidebarItem>
      {/each}
      </SidebarGroup>
    {/each}
  </SidebarWrapper>
</Sidebar>

<div class="2xl:w-full xl:w-5/6 lg:w-4/6 md:w-full mx-auto bg-gray-100 dark:bg-gray-700 px-6 rounded-lg pb-10 pt-2 z-20">
  <main>
    <slot />
  </main>
</div>
