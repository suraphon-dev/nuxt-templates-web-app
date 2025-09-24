<template>
  <div v-show="isOpen" class="drawer-side shadow-md">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-64 min-h-full text-base-content bg-base-100 ">
      <li>
        <details open>
          <summary>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="black"
                d="M5.75 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm5.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
              />
              <path
                fill="black"
                d="M6.25 0h2A.75.75 0 0 1 9 .75V3.5h3.25a2.25 2.25 0 0 1 2.25 2.25V8h.75a.75.75 0 0 1 0 1.5h-.75v2.75a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V9.5H.75a.75.75 0 0 1 0-1.5h.75V5.75A2.25 2.25 0 0 1 3.75 3.5H7.5v-2H6.25a.75.75 0 0 1 0-1.5ZM3 5.75v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75Z"
              />
            </svg>
            <span class="text-black">Menu</span>
          </summary>

          <ul>
            <li>
              <div>item 1</div>
            </li>
            <li>
              <div>item 2</div>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
})
</script>
