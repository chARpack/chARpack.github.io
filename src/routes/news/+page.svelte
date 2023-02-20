<script context="module">
    const allPosts = import.meta.glob("./**/*.md");
    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then( ({metadata}) => {
            return { path, metadata}
            })
        );  
    }
    export async function load() {
        const posts = await Promise.all(body);
            return {
            props: {posts}
        }
    }
</script>

<script>
    export let posts;
</script>

<h1>News</h1>

<section>
    <h3>We're Online!</h3>
    <p>2023-02-20</p>
    <p>
    The Webpage of chARp Molecular Builder is now up and running.<br>
    Stay tuned for more content.
    </p>
</section>

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