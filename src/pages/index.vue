<script setup lang="ts">
const { t } = useI18n()
const appStore = useAppStore()
</script>

<template>
  <div>
    <div text="green 20px">
      {{ appStore.count }}
      {{ t('nihao') }}
    </div>
    <button @click="appStore.inc">
      inc
    </button>
  </div>
</template>
