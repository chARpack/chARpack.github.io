<script>
	import { Heading, P, Hr, A, Mark, Secondary } from 'flowbite-svelte'
    import globToArray from '$lib/globToArray';

    const allPosts = import.meta.globEager("./content/**/*.md");
    const posts = globToArray(allPosts).reverse();

	posts.forEach(post => {
		const date = new Date(post.metadata.date);
		post.metadata.date = date.toISOString().slice(0, 10);
	});
</script>

<div class="self-center">
<Heading tag="h1" class="mb-6 mt-6">News</Heading>
</div>
<!-- <hr class="mb-6 border-2"/> -->
<Hr class="my-8" height="h-1" />

{#each  posts as post }
<div class="bg-gray-200 dark:bg-gray-700 p-5 rounded-lg mb-6">
	<Heading tag="h1" class="mb-3">{post.metadata.title}</Heading>
	<Heading tag="h3" class="mb-6">{post.metadata.date}</Heading>
    <svelte:component this={post.default} />
</div>
{/each}

