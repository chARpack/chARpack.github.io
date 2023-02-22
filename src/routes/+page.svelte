<svelte:head>
	<title>Home</title>
	<meta name="description" content="chARp Home" />
</svelte:head>
<script>
	import { Carousel, Heading, P, A, Mark, Secondary } from 'flowbite-svelte'
	//import { images } from './+server.js';
	import { images } from './images.js';
	let showThumbs=false
  	let showCaptions=false
</script>

<div class="max-w-2xl self-center mb-1">
	<div><Carousel {images} loop {showCaptions} {showThumbs} duration="5000"/></div>
</div>

<div>
    <Heading tag="h1" class="mb-6">chARp <Secondary>Molecular Builder</Secondary></Heading>
	<P>The toolkit chARp Molecular Builder provides an augmented reality environment for building and simulation of molecules.
		chARp Molecular Builder was designed to enhance the normal workflow of a computational chemistry research with immersion into the data, without the drawback of abandoning the real world like in fully virtal reality environments.
		In particular, chARp Molecular Builder encourages a hybrid setup of workstation and AR device.
	</P>
</div>
