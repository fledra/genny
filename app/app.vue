<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <Header />

    <UMain class="pt-4">
      <UContainer class="flex gap-4">
        <Navigation class="max-w-3xs" />
        <NuxtPage class="grow" />
      </UContainer>
    </UMain>
  </UApp>
</template>
