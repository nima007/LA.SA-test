<script setup>
const props = defineProps(['blogData'])
const lang = useI18n().locale;
console.log("prop" ,props.blogData);

</script>

<template>
    <NuxtLinkLocale :to="{name:'blog_single_page',params:{'slug':blogData.slug}}" class="blog-item"  itemscope itemtype="https://schema.org/Article">
        <article>
            <div class="blog-image-date-category-wrapper">
                <img :src="blogData.image" alt="">
                <div class="blog-data-row">
                    <div class="date-chips chips">
                        <img src="~/assets/images/cal.svg" alt="">
                        <span>{{new Date(blogData.updatedAt).toLocaleDateString(lang)}}</span>
                    </div>
                </div>
            </div>
            <div class="blog-context-wrapper">
                <h2 itemprop="name">{{blogData.title[lang]}}</h2>
            </div>
        </article>
    </NuxtLinkLocale>
</template>
<style scoped>
.blog-item {
    border-radius: var(--gap);
    overflow: hidden;
    display: inline-block;
    width: 100%;
    height: fit-content;
    transition: .3s;
    text-decoration: none;
    color: var(--dark-color);
}

.blog-item:hover {
    border: 1px solid;
    padding: var(--gap);
}

.blog-item>article {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 400px;
    background: var(--light-color);
    gap: 16px;


}

.blog-item>article>div {
    height: 50%;
    overflow: hidden;
    flex: 1;
}

.blog-image-date-category-wrapper {
    aspect-ratio: 1.618/1;
    border-radius: var(--gap);
    overflow: hidden;
    width: 100%;
    position: relative;

}

.blog-image-date-category-wrapper>img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
}

.blog-item>article>.blog-context-wrapper {
    border-radius: var(--gap);
    margin-inline: 16px;
    padding-inline: 16px;
    text-align: center;
}

.blog-item>article>.blog-context-wrapper .blog-title {
    font-size: 24px;
}

.blog-data-row {
    width: fit-content;
    padding: 16px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    gap: 4px;
    direction: ltr;
    color: #fff;
}

.blog-data-row .chips {
    background: var(--dark-color);
    height: 24px;
    padding: 5px 16px;
    display: flex;
    gap: 8px;
    border-radius: 16px;
    align-items: center;
}
.blog-data-row .chips span{
    margin: 0;
    font-size: 12px;
    height: 100%;
    font-family: Kalameh-Light;
    margin-bottom: 3px;
}
</style>
