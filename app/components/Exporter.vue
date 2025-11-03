<template>
  <div class="w-1/2">
    <div class="flex justify-between items-center mb-4">
      <FieldHeader title="Output" />
      <USelect v-model="type" :items="exporterTypes" />
    </div>

    <UCard>
      <pre class="w-full font-mono">{{ code }}</pre>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui';

const props = defineProps<{ input?: object }>();

const type = ref<'json' | 'csv'>('json');
const code = computed(() => {
  switch (type.value) {
    case 'json': return JSON.stringify(props.input, null, 2);
    // TODO: write a json to csv converter
    case 'csv': return '';
    default: return '';
  }
});

const exporterTypes: SelectItem[] = [
  { label: 'JSON', value: 'json' },
  { label: 'CSV', value: 'csv' },
];
</script>
