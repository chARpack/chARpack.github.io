<svelte:head>
	<title>Home</title>
	<meta name="description" content="chARp Home" />
</svelte:head>
<script>
	import { Carousel } from 'flowbite-svelte'
	import { images } from './+server.js';
	let showThumbs=false
  	let showCaptions=false
</script>

<section>
	<div class="max-w-2xl">
		<Carousel {images} loop {showCaptions} {showThumbs} duration="5000"/>
	</div>
</section>

<section>
    <h1>About</h1>
	<p>The toolkit chARp Molecular Builder provides an augmented reality environment for building and simulation of molecules.
		chARp Molecular Builder was designed to enhance the normal workflow of a computational chemistry research with immersion into the data, without the drawback of abandoning the real world like in fully virtal reality environments.
		In particular, chARp Molecular Builder encourages a hybrid setup of workstation and AR device.
	</p>
</section>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 0.6;
}

h1 {
	width: 100%;
}

.welcome {
	display: block;
	position: relative;
	width: 100%;
	height: 0;
	padding: 0 0 calc(100% * 495 / 2048) 0;
}

.welcome img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	display: block;
}
</style>
