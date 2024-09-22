<template>
  <main>
    <!-- <LayoutMainHeader /> -->
    <section class="flex">
      <div class="w-full bg-slate-50 h-[calc(100vh-60px)] overflow-y-auto p-4">
        <slot />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const sideCollapsed = computed(() => useGlobalStore().sideCollapsed);
onBeforeMount(() => {});
</script>

<style></style>
