<script>
    import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
    export let data;
    const { page } = data;
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid class="mb-3">
    <BreadcrumbItem href="/manual" home>Manual</BreadcrumbItem>
    <BreadcrumbItem href={page.absSectionRoute}>{page.sectionTitle}</BreadcrumbItem>
    <BreadcrumbItem href={page.absRoute}>{page.metadata.title}</BreadcrumbItem>
</Breadcrumb>
<svelte:component this={page.default} />