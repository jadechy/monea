<template>
  <div class="item p-0 pr-6">
    <div class="flex gap-2.5 items-center">
      <div class="rounded-full h-14 w-14 bg-gray-500" />
      <p>{{ user.username }}</p>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
  import type { UserDTOType } from "@/types/user"

  interface Props {
    user: UserDTOType
  }
  defineProps<Props>()
</script>
