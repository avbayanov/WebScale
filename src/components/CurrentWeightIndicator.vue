<template>
  <div class="d-flex justify-center">
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const value = computed(() => store.currentWeight)
</script>
