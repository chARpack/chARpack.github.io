<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    import { page } from "$app/stores";
    
    let section = $page.data.sections.filter(sec => {return sec.name === $page.params.section})[0];

</script>

<Breadcrumb aria-label="breadcrumb" solid class="mb-3">
    <BreadcrumbItem href="/manual" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={section.absRoute}>{section.title}</BreadcrumbItem>
</Breadcrumb>
<Heading tag="h2" class="mb-4">{section.title}</Heading>
<ul>
{#each section.pages as page}
    <li><Heading tag="h3" class="ml-6"><a href={page.pageRoute}>{page.metadata.title}</a></Heading></li>
{/each}
</ul>
