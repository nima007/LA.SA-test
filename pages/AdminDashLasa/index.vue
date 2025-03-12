<template>
  <main>
    <h1>به داشبورد ادمین خوش آمدید</h1>
    <p>از منوی سمت راست به تنظیمات مورد نظر وارد شوید</p>
    <p>&#x26A0; به خاطر بسپارید صفحهات ادمین در گوشی دسترسی پذیر نیستند !</p>
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