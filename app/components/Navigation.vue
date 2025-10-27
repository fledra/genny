<template>
  <div class="w-full">
    <UNavigationMenu :items="items" title="Navigation" orientation="vertical" />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const router = useRouter();
const items = computed<NavigationMenuItem[]>(() => {
  const routes = router.getRoutes();
  return routes.map<NavigationMenuItem>((route) => {
    const label = route.name === 'index' ? 'Home' : (route.name?.toString() ?? '');
    const icon = route.meta.icon ?? '';
    return {
      label,
      icon,
      to: route.path,
    };
  });
});
</script>
