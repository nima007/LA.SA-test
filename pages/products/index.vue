<template>
  <main>
    <h2 class="page-title">
        {{ $t('products-page.page-title') }}
    </h2>
    <ul v-if="data" id="products-and-valves-list">
        <ProductsProductItem  v-for="product in data" :product></ProductsProductItem>
    </ul>
  </main>
</template>

<script setup>
definePageMeta({
  name: "products"
});

const {data} = await useFetch("/api/products",{query:{lang:useI18n().locale.value}});
console.log("data" , data);
console.log("client :",useI18n().locale.value);

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
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: calc(var(--gap) * 2);
}
@media (max-width:980px) {
  #products-and-valves-list{
    align-items: center;
  }
}
</style>