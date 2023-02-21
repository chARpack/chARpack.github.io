<script>
  import "../app.postcss";
  import Header from "./Header.svelte";
  // import "./styles.css";
  import { DarkMode, Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte"
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <!-- <footer>
    <hr />
    <p>
      This Website is maintained by the Institute for Theoretical Chemistry of
      the University Stuttgart.<br />
      <a href="/privacy">Privacy notice</a> | <a href="/legal">Legal notice</a>
    </p>
  </footer> -->
  
  <Footer>
    <FooterCopyright href="https://www.itheoc.uni-stuttgart.de/" by="ITheoC" year={2023} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/legal">Licensing</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <DarkMode {btnClass} />
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

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
