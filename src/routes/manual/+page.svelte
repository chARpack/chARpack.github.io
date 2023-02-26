<script>
  import { load } from './+page.js';
  let sections;

  async function loadData() {
    const data = await load({ params: {} });
    sections = data.sections;
  }

  loadData();

  console.log("Manual mainpage")
  console.log(sections);

  // let data;
  // const {sections} = data;

</script>

{#each sections as section}
  <h1>{section.name}</h1>
  {#each section.dictionaries as page}
    <a href={page.route}>{page.metadata.title}</a>
  {/each}
{/each}