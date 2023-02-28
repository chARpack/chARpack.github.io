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

<div class="max-w-2xl self-center mb-12 mt-4">
	<div><Carousel {images} loop {showCaptions} {showThumbs} duration="5000"/></div>
</div>

<div>
    <Heading tag="h1" class="mb-6">chARp <Secondary>Molecular Builder</Secondary></Heading>
	<P>
		The toolkit chARp Molecular Builder provides an augmented reality (AR) environment for building and simulating of molecules.
		chARp Molecular Builder was designed to enhance the normal workflow of a computational chemistry researcher with AR immersion, without the drawback of abandoning the real world like in fully virtual environments.
		In particular, chARp Molecular Builder encourages a hybrid setup of workstation and AR device.
	</P>
	<Heading tag="h4" class="mt-6 mb-2">About</Heading>
	<P>
		This project is part of the <A href="https://www.simtech.uni-stuttgart.de/exc/">Cluster of Excellence EXC 2075 "Data-Integrated Simulation Science (SimTech)"</A> of the <A href="https://www.uni-stuttgart.de/">University of Stuttgart</A>.
		The development of chARp is a joint effort of the <A href="https://www.itheoc.uni-stuttgart.de/">Institute for Theoretical Chemistry</A> and the <A href="https://www.visus.uni-stuttgart.de/">Institute for Visualization and Interactive Systems</A>.
	</P>
</div>
