<template>
  <div class="w-full h-screen" :style="backgroundImageStyle">
    <article class="container grid items-center h-full">
      <h1 class="text-5xl font-bold leading-snug">
        قم بشراء أو تأجير أو بيع <br />
        عقارك بكل بسهولة
      </h1>
    </article>
  </div>
</template>

<script lang="ts" setup>
import image from "~/assets/img/cover-bg.png";
const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
</script>

<style></style>
