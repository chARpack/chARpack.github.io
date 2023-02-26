<script>
    import { Heading, P, Hr, A, Mark, Secondary } from 'flowbite-svelte'
    export let data;
    const { page } = data;
</script>

<Heading tag="h1" class="mb-3">{page.sectionTitle}</Heading>
<Heading tag="h2" class="mb-3">{page.metadata.title}</Heading>
<svelte:component this={page.default} />