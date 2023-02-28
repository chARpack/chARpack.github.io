<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    import { page } from "$app/stores";

    let pageContent = $page.data.sections.filter(sec => {return sec.name === $page.params.section})[0].dictionaries.filter(p => {return p.pageRoute === $page.params.page})[0];
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid class="mb-3">
    <BreadcrumbItem href="/manual" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={pageContent.absSectionRoute}>{pageContent.sectionTitle}</BreadcrumbItem>
    <BreadcrumbItem href={pageContent.absRoute}>{pageContent.metadata.title}</BreadcrumbItem>
</Breadcrumb>
<svelte:component this={pageContent.default} />