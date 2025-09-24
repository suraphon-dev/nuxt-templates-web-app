<template>
  <!-- Navbar -->
  <header class="w-full bg-base-100 shadow p-4 flex justify-between items-center">
    <button class="btn btn-ghost md:hidden" @click="emits('update:isMobileSidebarOpen', true)">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z" />
      </svg>
    </button>

    <button class="hidden md:flex btn btn-ghost btn-sm" @click="emits('update:isCollapsed', !props.isCollapsed)">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z" />
      </svg>
    </button>
    <h1 class="text-xl font-bold">App</h1>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </header>
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
