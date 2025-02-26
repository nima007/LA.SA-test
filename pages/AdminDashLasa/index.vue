<template>
  <main>
    <h1>Admin - dash</h1>
    data : {{ data }}
    <br>
    error : {{ !!error }}
    <br>
    <NuxtLinkLocale :to="{ name: 'admin_products_create' }">ایجاد محصول</NuxtLinkLocale>
  </main>
</template>

<script setup>

definePageMeta({
  name: "admin_dashboard_page",
  layout: "admin"
})
const { data, error } = await useAsyncData("getIndex", () =>
  $fetch("/api/InData", {
    method: "get",
    query: { lang: useI18n().locale.value }
  })
);
</script>

<style scoped>
main {
  padding-top: 200px;
}
</style>