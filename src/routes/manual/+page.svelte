<script>

  export let data;
  const {sections} = data;

</script>

{#each sections as section}
  <h1>{section.title}</h1>
  {#each section.dictionaries as page}
    <a href={page.route}>{page.metadata.title}</a>
  {/each}
{/each}