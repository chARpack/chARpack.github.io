<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    export let data;
    let section = data.section;
    let version = data.version;
</script>

<Breadcrumb aria-label="manual breadcrumb" solid class="mb-3" solidClass="bg-gray-50 dark:bg-gray-800 rounded">
    <BreadcrumbItem href="/manual/{version}" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={section.absRoute}>{section.title}</BreadcrumbItem>
</Breadcrumb>
<Heading tag="h2" class="mb-4">{section.title}</Heading>
<ul>
{#each section.pages as page}
    <li><Heading tag="h3" class="ml-6"><a href={page.pageRoute}>{page.metadata.title}</a></Heading></li>
{/each}
</ul>
