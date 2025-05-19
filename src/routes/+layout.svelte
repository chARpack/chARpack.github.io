<script>
  import "../app.css";
  import 'flowbite';
  // import "./styles.css";
  import { DarkMode, Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte"
	let darkmodeButtonClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  let headerButtonClass = 'text-gray-500 dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-500 rounded-lg text-xl p-2'

  // globally add code highlighting
  import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	import 'prismjs/components/prism-javascript';
	import { onMount } from 'svelte';

	function initSyntaxHighlighting() {
		Prism.highlightAll();
	}

	onMount(initSyntaxHighlighting);
</script>

<div class="app">
  <header class="self-center xl:w-3/6 lg:w-4/6 w-auto z-10">
    <Navbar let:hidden let:toggle rounded color="form" class="min-w-full dark:bg-gray-900">
      <NavBrand href="/">
        <img src="/charpack_logo.svg" class="mr-3 h-20 sm:h-25" alt="chARpack Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">chARpack</span>
      </NavBrand>
      <NavHamburger on:click={toggle} />
      <div class="flex md:order-2">
        <Button size="sm" gradient href="https://github.com/KoehnLab/chARpack"><img src="/github-mark-white.svg" class="mr-3 h-6 sm:h-9" alt="GitHub Logo"/>Go to GitHub</Button>
      </div>
      <NavUl {hidden}>
        <NavLi href="/" active={true}><Button color="dark" size="lg" class={headerButtonClass}>Home</Button></NavLi>
        <NavLi href="/news"><Button color="dark" size="lg" class={headerButtonClass}>News</Button></NavLi>
      <NavLi href="/manual/master/00-getting_started/00-introduction/"><Button color="dark" size="lg" class={headerButtonClass}>Manual</Button></NavLi>
      <NavLi href="/development/00-getting_started/01-installation/"><Button color="dark" size="lg" class={headerButtonClass}>Development</Button></NavLi>
      </NavUl>
    </Navbar>
  </header>

  <main>
    <slot />
  </main>

  <Footer class="self-center xl:w-3/6 lg:w-4/6 w-auto dark:bg-gray-900">
    <FooterCopyright href="https://www.itheoc.uni-stuttgart.de/" by="ITheoC" year={2023} />
    <FooterLinkGroup ulClass="max-w-2xl flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/legal">Licensing</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <DarkMode {darkmodeButtonClass} />
    </FooterLinkGroup>
  </Footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
