<template>
  <div id="app">
    <NuxtLayout></NuxtLayout>
  </div>
</template>
<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const i18nHead = useLocaleHead();
useHead(() => ({
  htmlAttrs: {
    ...i18nHead.value.htmlAttrs
  }
}));</script>
<style>
.page-enter-active::after,
.page-leave-active::after {
  transition:  .1s;
  content: "";
  width: 100vw;
  height: 100vh;
  background: red;
  position: fixed;
  top: 0;
  display: inline-block;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  position: absolute;
  z-index: 99;
}
</style>