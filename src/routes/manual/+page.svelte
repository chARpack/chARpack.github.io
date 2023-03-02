<script>
  import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
  export let data;
  const {sections} = data;

</script>


{#each sections as section}
  <Heading tag="h2" class="mb-4">{section.title}</Heading>
  {#each section.dictionaries as page}
      <Heading tag="h3" class="ml-6"><a href={page.absRoute}>{page.metadata.title}</a></Heading><br>
  {/each}
{/each}