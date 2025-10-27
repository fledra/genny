<template>
  <UHeader mode="slideover">
    <template #title>
      <h1 class="text-3xl font-bold uppercase tracking-wider">
        genny
      </h1>
    </template>

    <template #right>
      <UTooltip text="Open on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/fledra/genny"
          icon="lucide:github"
          target="_blank"
        />
      </UTooltip>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
