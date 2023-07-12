<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte'
    import { page } from "$app/stores";

    let pageContent = $page.data.sections.filter(sec => {return sec.name === $page.params.section})[0].pages.filter(p => {return p.pageRoute === $page.params.page})[0];

    $: pageList = $page.data.sections.flatMap((section) => section.pages);
	$: index = pageList.findIndex(({ absRoute }) => absRoute + '/' === $page.url.pathname);
	$: prev = pageList[index - 1];
	$: next = pageList[index + 1];
</script>

<Breadcrumb aria-label="manual breadcrumb" solid class="mb-3" solidClass="bg-gray-50 dark:bg-gray-800 rounded">
    <BreadcrumbItem href="/manual" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={pageContent.absSectionRoute}>{pageContent.sectionTitle}</BreadcrumbItem>
    <BreadcrumbItem href={pageContent.absRoute}>{pageContent.metadata.title}</BreadcrumbItem>
</Breadcrumb>
<Heading tag="h1">{pageContent.metadata.title}</Heading>
<Hr  class="mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-900" height="h-1"/>
<svelte:component this={pageContent.default} />

<Hr  class="mx-auto my-6 bg-gray-100 border-0 rounded dark:bg-gray-900" height="h-1"/>
<div class="flex justify-between">
    <div>
        {#if prev}
            <A data-sveltekit-reload="" class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={prev.absRoute}><Button color="light">previous</Button></A>
        {:else}
            <Button color="light" class="pointer-events-none opacity-40">previous</Button>
        {/if}

    </div>
    <div>
        {#if next}
            <A data-sveltekit-reload="" class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={next.absRoute}><Button color="light">next</Button></A>
        {:else}
            <Button color="light" class="pointer-events-none opacity-40">next</Button>
        {/if}
    </div>
</div>

