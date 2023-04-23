<script setup lang="ts">
const { t } = useI18n()
const appStore = useAppStore()

const amount = computed(() => {
  return appStore.count
})
Toast.success('sds')
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
    <p>{{ amount }}</p>
  </div>
</template>
