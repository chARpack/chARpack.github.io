<script>
    export let data;
    const { section } = data;
</script>

<h1>{section[0].sectionTitle}</h1>
{#each section as page}
    <a href={page.route}>{page.metadata.title}</a>
{/each}