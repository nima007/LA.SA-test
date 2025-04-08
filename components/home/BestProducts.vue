<template>
    <section>
        <ul class="best-products-list">
            <li v-for="product in products" itemscope itemtype="https://schema.org/Product">
                <NuxtLinkLocale :to="{name:'product_page',params:{'slug':product.slug}}">
                    <div class="product-image-wrapper">
                        <img itemprop="image" :src="product.primaryImage" alt />
                    </div>
                    <div class="product-data-containter">
                        <p itemprop="name" class="product-name"> {{ product.name[lang] }}</p>
                        <p style="color: var(--light-color-green);font-family: Kalameh-Medium;">
                            {{ $t('product-item.button-more') }}
                        </p>
                    </div>
                </NuxtLinkLocale>
            </li>
        </ul>
        <NuxtLinkLocale :to="{name :'products'}" style="width: fit-content;" class="button"> {{ $t('see-all-products') }} </NuxtLinkLocale>
        <hr width="300px;" style="margin-top:92px">
    </section>
</template>
<script setup>
const prop = defineProps(['products']);
const lang = useI18n().locale
</script>
<style scoped>
.best-products-list {
    display: flex;
    width: 100%;
    margin: 128px 0 ;
    padding: 0;
    justify-content: center;
    gap:128px;
    flex-wrap: wrap;
}

.best-products-list li {
    width: 350px;
    max-width: 100%;
    background: var(--dark-color);
    border-radius: var(--gap);
    overflow: hidden;
}

.best-products-list li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: var(--gap);
    font-size: 24px;
    transition: .3s;
}
.best-products-list li a:hover{
    box-shadow: inset 0 0 60px #0e63a0 ;
}
.best-products-list li a:hover .product-image-wrapper img{
scale:1.1
}
.best-products-list li:hover{
    box-shadow: 0 0 10px var(--light-color-green)
}

.product-image-wrapper {
    width: 100%;
    aspect-ratio: 1.14/1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image-wrapper img{
    width: 55%;
    transition: .3s;

}
section {
    padding-block: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content !important;
}
</style>