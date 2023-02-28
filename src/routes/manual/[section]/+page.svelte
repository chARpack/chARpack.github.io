<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    import { page } from "$app/stores";
    
    let section = $page.data.sections.filter(sec => {return sec.name === $page.params.section})[0];
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid class="mb-3">
    <BreadcrumbItem href="/manual" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={section.absRoute}>{section.title}</BreadcrumbItem>
</Breadcrumb>
<h1>{section.title}</h1>
{#each section.dictionaries as page}
    <a href={page.pageRoute}>{page.metadata.title}</a>
{/each}