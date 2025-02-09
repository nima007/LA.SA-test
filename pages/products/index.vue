<template>
  <main>
    <h2 class="page-title">
        {{ $t('products-page.page-title') }}
    </h2>
    <ul id="products-and-valves-list">
        <ProductsProductItem></ProductsProductItem>
    </ul>
  </main>
</template>

<script setup>
definePageMeta({
  name: "products"
});
</script>

<style scoped>

main{
    background: var(--dark-color);
    height: fit-content;
    overflow: hidden;
    padding: var(--padding-inline);
    padding-top: calc(var(--menu-height) *  1.8);
}
.page-title{
    color: var(--light-color);
}
#products-and-valves-list{
    list-style: none;
    padding: 0;
    margin-block: 72px;
}
</style>