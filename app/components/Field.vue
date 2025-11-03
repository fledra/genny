<template>
  <div>
    <label class="text-sm text-dimmed">{{ props.label }}</label>
    <p class="text-lg">
      {{ props.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface FieldProps {
  label: string;
  value: string | number;
}

const props = defineProps<FieldProps>();
</script>
