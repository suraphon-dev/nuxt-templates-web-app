<template>
  <div>
    <WebappApp2TheNavbar @toggle-menu="toggleMenu = !toggleMenu" />
    <div class="drawer bg-base-200 min-h-screen">
      <input id="drawer-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-6">
        <slot />
      </div>

      <div class="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <WebappApp2TheSidebar :isOpen="toggleMenu" />
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleMenu = ref(true)
</script>
