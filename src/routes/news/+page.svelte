<script>
	import { Heading, P, Hr, A, Mark, Secondary } from 'flowbite-svelte'
    import globToArray from '$lib/globToArray';

    const allPosts = import.meta.globEager("./content/**/*.md");
    const posts = globToArray(allPosts);

	posts.forEach(post => {
		console.log(post);
		console.log(post.default);
	});
</script>

<div class="self-center">
<Heading tag="h1" class="mb-6 mt-6">News</Heading>
</div>
<!-- <hr class="mb-6 border-2"/> -->
<Hr class="my-8" height="h-1" />

{#each  posts as post }
<div class="bg-gray-300 dark:bg-gray-700 p-5 rounded-lg">
	<Heading tag="h1" class="mb-6">{post.metadata.title}</Heading>
	<Heading tag="h2" class="mb-6">{post.metadata.date}</Heading>
	<P>
    <svelte:component this={post.default} />
	</P>
</div>
{/each}

