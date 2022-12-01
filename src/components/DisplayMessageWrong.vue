<template>
  <div>{{ resultingMessage }}</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  // Added default, to ease the vue/require-default-prop warning. Now this prop is extracted as
  // `string` and now `string | undefined`
  message: { type: String, default: undefined }
})

// With default defined, ESLint will now trigger `@typescript-eslint/no-unnecessary-condition` warning
const resultingMessage = ref(props.message ?? 'No message today')

// With default defined, ESLint will now trigger `@typescript-eslint/no-unnecessary-condition` warning
watch(() => props.message, () => { resultingMessage.value = props.message ?? 'No message today'})
</script>
