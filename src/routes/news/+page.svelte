<script>
    import globToArray from '$lib/globToArray';

    const allPosts = import.meta.globEager("./content/**/*.md");
    const posts = globToArray(allPosts);

</script>

<h1>News</h1>

{#each  posts as post }
<section>
    <svelte:component this={post.default} />
</section>
{/each}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
        border: 1px solid red;
	}
</style>