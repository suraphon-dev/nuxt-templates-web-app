<template>
   <div class="flex h-screen bg-base-200">
      <!-- Sidebar -->
      <WebappApp1TheSidebar
         :is-collapsed="isCollapsed"
         :is-mobile-sidebar-open="isMobileSidebarOpen"
         @update:is-collapsed="isCollapsed = $event"
         @update:is-mobile-sidebar-open="isMobileSidebarOpen = $event"
      />

      <!-- Main content -->
      <div class="flex-1 flex flex-col">
         <WebappApp1TheNavbar
            :is-collapsed="isCollapsed"
            :is-mobile-sidebar-open="isMobileSidebarOpen"
            @update:is-collapsed="isCollapsed = $event"
            @update:is-mobile-sidebar-open="isMobileSidebarOpen = $event"
         />

         <!-- Page content -->
         <main class="p-6 overflow-auto flex-1">
            <slot />
         </main>
      </div>
   </div>
</template>

<script setup>
const isCollapsed = ref(true)
const isMobileSidebarOpen = ref(false)
</script>
