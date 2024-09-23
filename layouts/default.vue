<template>
  <main>
    <LayoutMainHeader />
    <section class="p-4 bg-slate-50">
      <slot />
    </section>
  </main>
</template>

<script lang="ts" setup>
// const sideCollapsed = computed(() => useGlobalStore().sideCollapsed);
onBeforeMount(() => {});
</script>

<style></style>
