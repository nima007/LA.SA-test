<template>
  <div id="app">
    <Menu></Menu>
    <NuxtPage />
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
}))</script>
