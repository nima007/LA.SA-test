<template>
  <li itemscope itemtype="https://schema.org/Product">
    <div class="product-image-wrapper">
      <img itemprop="image" :src="product.primaryImage" alt />
    </div>
    <div class="product-data-containter">
        <p itemprop="name" class="product-name">    {{product.name}}</p>
      <p
        itemprop="description"
        class="product-description"
      >{{product.description?.slice(0,100)}}...</p>
      <div class="link-list">
        <NuxtLinkLocale :to="{name:'product_page',params:{slug:product.slug}}" itemprop="url" class="button">
          {{$t('product-item.button-more')}}
        </NuxtLinkLocale>
        <a v-if="product.catalogue" :href="product.catalogue[0]" download="" class="button btn-secondary">
          {{$t('product-item.button-catalogue')}}</a>
      </div>
    </div>
  </li>
</template>

<script setup>
 const props = defineProps(['product']);
 
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  gap: var(--padding-inline);
  color: #fff;
}
.product-image-wrapper {
  width: 300px;
  aspect-ratio: 1/1.23;
  background: #16222e;
  position: relative;
  box-shadow: 0 4px 4px #0003;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-image-wrapper::before {
  content: "";
  width: 100%;
  aspect-ratio: 1.6/0.6;
  background: var(--dark-color);
  display: inline-block;
  position: absolute;
  bottom: 0;
}
.product-image-wrapper > img {
  width: 50%;
  transform: translateY(40%);
}
.product-data-containter{
  flex: 1;
}
.product-name {
  font-size: 32px;
}
.product-description {
  font-size: 24px;
}
.link-list {
  display: flex;
  gap: var(--gap);
  margin-block: var(--gap);
}
.link-list > * {
  padding-inline: var(--padding-inline);
}

@media (max-width: 980px) {
  li {
    flex-direction: column;
    width: 300px;
    max-width: 100%;
    border-bottom: 1px solid var(--light-color);
    padding-bottom: var(--gap);
  }
  .product-image-wrapper {
    max-width: 100%;
  }

  .product-name {
    font-size: 24px;
  }
  .product-description {
    font-size: 16px;
  }
  .link-list {
    flex-direction: column;
  }
}
</style>