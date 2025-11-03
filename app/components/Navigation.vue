<template>
  <div class="w-full">
    <UNavigationMenu :items="items" title="Navigation" orientation="vertical" />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const router = useRouter();
const routes = router.getRoutes();

function getRoutesOf(path: string): NavigationMenuItem[] {
  return routes
    .filter((route) => route.path.includes(path))
    .map((route) => ({
      label: route.name?.toString(),
      icon: route.meta.icon ?? undefined,
      to: route.path,
    }));
}

const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Modules',
    type: 'label',
  },
  ...getRoutesOf('module/'),
  {
    label: 'Primitives',
    type: 'label',
  },
  ...getRoutesOf('primitive/'),
];
</script>
