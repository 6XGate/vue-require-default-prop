<template>
  <div>{{ resultingMessage }}</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  // Wants `default` or `required` to ease the `vue/require-default-prop warning`. This is not
  // desirable when the property could be `undefined`. Right now this is typed as
  // `string | undefined`.
  message: String
})

const resultingMessage = ref(props.message ?? 'No message today')

watch(() => props.message, () => { resultingMessage.value = props.message ?? 'No message today'})
</script>
