<template>
  <li itemscope itemtype="https://schema.org/Product">
    <div class="product-image-wrapper">
      <img itemprop="image" src alt />
    </div>
    <div class="product-data-containter">
      <p itemprop="name" class="product-name">سوپاپ گاز زدایی با فیلتر</p>
      <p
        itemprop="description"
        class="product-description"
      >سوپاپ گاز زدایی با فیلتر برای بسته بندی های مواد غذایی</p>
      <div class="link-list">
        <NuxtLink itemprop="url" class="button">مشاهده</NuxtLink>
        <NuxtLink class="button btn-secondery">دانلود کاتالوگ</NuxtLink>
      </div>
    </div>
  </li>
</template>

<script>
export default {};
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
  background: black;
}
.product-name{
    font-family: Kalameh-SemiBold;
    font-size: 32px;
}
.product-description{
    font-size: 24px;
}
.link-list{
    display: flex;
    gap: var(--gap);
    margin-block: var(--gap);
}
.link-list>*{
    padding-inline: var(--padding-inline);
}
.btn-secondery{
    color: var(--light-color-green);
    background: transparent;
    border: 2px solid var(--light-color-green);
}
</style>