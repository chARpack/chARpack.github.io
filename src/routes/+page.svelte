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

<div class="self-center mb-12 mt-4 lg:max-w-2xl md:max-w-lg">
	<Carousel {images} loop {showCaptions} {showThumbs} duration="5000"/>
</div>

<div>
    <Heading tag="h1" class="mb-6">chARp <Secondary>Chemistry in Augmented Reality Package</Secondary></Heading>
	<P>
	The basic purpose of the project is to provide an environment for exploring the prospects of augmented reality (AR) in chemistry and related molecular sciences. We believe that holographic projections are a future technology with tremendous impact in all scientific fields that extensively work with three-dimensional models. In chemistry, the idea of a molecular structure is a fundamental concept since the days of van't Hoff (organic stereochemistry) and Werner (complex chemistry) and the key to understaning reactivity and properties of chemical compounds. One big advantage of AR is the much better integration into conventional workflows of computational chemistry, as it provides immersive 3D models without the drawback of abandoning the real world like in fully virtual environments. 
	</P>
    <Heading tag="h1" class="mb-6">chARp <Secondary>Molecular Builder</Secondary></Heading>
	<P>
		The toolkit chARp Molecular Builder provides an AR environment for building and inspecting (dynamic) models of molecules. A simple force-field provides chemically meaningful structures, but the program also allows you to modify certain structure parameters (e.g. bond lengths or angles) at will. In particular, you can explore the molecule's conformational space. The program also allows for multiuser environments. 
	</P>
	<Heading tag="h3" class="mt-6 mb-2">About</Heading>
	<P>
		This project is part of the <A href="https://www.simtech.uni-stuttgart.de/exc/">Cluster of Excellence EXC 2075 "Data-Integrated Simulation Science (SimTech)"</A> of the <A href="https://www.uni-stuttgart.de/">University of Stuttgart</A>.
		The development of chARp is a joint effort of the <A href="https://www.itheoc.uni-stuttgart.de/">Institute for Theoretical Chemistry</A> and the <A href="https://www.visus.uni-stuttgart.de/">Institute for Visualization and Interactive Systems</A>.
	</P>
</div>
