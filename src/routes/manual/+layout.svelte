<script>
    import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte'
    import charp from '$lib/images/charp_logo.svg';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  
    let site = {
      name: 'chARp',
      href: '/',
      img: '/charp_logo.svg'
    };
  </script>

<div class="app columns-2 max-w-full">
  <div>
    <Sidebar>
      <SidebarWrapper class="dark:bg-gray-900">
        <SidebarGroup>
          <SidebarBrand {site} />
          <SidebarItem label="Getting Started" href="/manual/getting_started">
          </SidebarItem>
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </div>
  <div>
    <main>
      <slot />
    </main>
  </div>
</div>

