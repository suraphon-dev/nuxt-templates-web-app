<template>
  <!-- Sidebar Mobile -->
  <transition name="slide">
    <aside v-if="isMobileSidebarOpen" class="fixed inset-0 z-50 w-64 bg-base-100 shadow-lg flex flex-col md:hidden">
      <div class="p-4 text-xl font-bold flex justify-between items-center">
        App
        <button class="btn btn-ghost btn-sm" @click="emits('update:isMobileSidebarOpen', false)">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z" />
          </svg>
        </button>
      </div>
      <ul class="menu p-4 flex-1 overflow-y-auto">
        <li><NuxtLink to="/" class="flex items-center gap-2 p-2 rounded-lg">Dashboard</NuxtLink></li>
        <li><NuxtLink to="/users" class="flex items-center gap-2 p-2 rounded-lg">Users</NuxtLink></li>
        <li><NuxtLink to="/settings" class="flex items-center gap-2 p-2 rounded-lg">Settings</NuxtLink></li>
      </ul>
    </aside>
  </transition>

  <!-- Sidebar Desktop -->
  <aside v-show="isCollapsed" class="hidden md:flex bg-base-100 shadow-lg flex-col w-64">
    <div class="p-4 text-xl font-bold flex justify-between items-center">App</div>

    <ul class="menu rounded-box w-full h-full">
      <li><a>Item 1</a></li>
      <li>
        <details open>
          <summary>Item 2</summary>
          <ul>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </aside>
</template>

<script setup>
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    required: true,
  },
  isMobileSidebarOpen: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['update:isCollapsed', 'update:isMobileSidebarOpen'])
</script>
