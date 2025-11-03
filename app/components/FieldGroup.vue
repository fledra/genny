<template>
  <div class="mb-8">
    <FieldHeader :title="props.title" class="mb-4" />
    <div class="grid gap-y-4" :class="cols">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface FieldGroupProps {
  title: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const props = defineProps<FieldGroupProps>();
const cols = computed(() => `grid-cols-${props.cols ?? 3}`);
</script>
