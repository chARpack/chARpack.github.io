<script>
  import { Heading, P, Hr, A, Mark, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
  export let data;
  const {sections} = data;
  //console.log(sections[0].dictionaries);
</script>

<Heading tag="h1" class="mb-4">Contents of the Development Guide</Heading>
<Hr  class="mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-900" height="h-1"/>
<ul>
{#each sections as section}
  <li><Heading tag="h2" class="mb-4">{section.title}</Heading></li>
  <ol>
  {#each section.pages as page}
      <li><Heading tag="h3" class="ml-6"><a href={page.absRoute}>{page.metadata.title}</a></Heading></li>
  {/each}
  </ol>
{/each}
</ul>
