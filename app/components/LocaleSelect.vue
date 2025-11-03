<template>
  <div class="w-3xs flex flex-col gap-1">
    <label>Locale</label>
    <USelectMenu
      v-model="locale"
      :items="locales"
      value-key="code"
      label-key="endonym"
      title="Locale"
      class="w-full"
      :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
    />
  </div>
</template>

<script setup lang="ts">
const locales = getGeneratorLocales();
const locale = defineModel<GeneratorLocale>({ default: 'en' });
</script>
