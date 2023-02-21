<script>
    import { mdsvex } from 'mdsvex';
    import globToArray from '$lib/globToArray';

    const allPosts = import.meta.globEager("./content/**/*.md");
    const posts = globToArray(allPosts);

    // const posts = [];
    // async function loadPosts() {
    //     const allPosts = await import.meta.glob("./content/**/*.md");
    
        // console.log("Posts");
        // console.log(allPosts);

        // for await (const path of Object.keys(allPosts)) {
        //     const file = await allPosts[path]();
        //     //const { html, metadata } = await mdsvex.default()(file);
        //     const { html, metadata } = file.then(({html, metadata}) => {return {html,metadata};});
        //     const { title, date } = metadata;
        //     const slug = path.replace('./content/', '').replace('.md', '');

        //     posts.push({title, date, slug, html});

        // }
    // }
    // loadPosts();
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