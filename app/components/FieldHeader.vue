<template>
  <div class="flex flex-col justify-center">
    <div class="text-2xl font-bold">
      {{ props.title }}
    </div>
    <div v-if="props.description" class="font-light text-muted mt-1">
      {{ props.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface FieldHeaderProps {
  title: string;
  description?: string;
}

const props = defineProps<FieldHeaderProps>();
</script>
