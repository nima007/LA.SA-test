<template>
    <main class="single-blog-page" itemscope itemtype="https://schema.org/Article">
        <article v-if="blog.content&&blog.content[lang]">
            <h1 itemprop="headline" class="post-title">{{ blog.title[lang] }}</h1>
            <div class="blog-data-row">
                <div class="date-chips chips">
                    <img src="~/assets/images/cal.svg" alt="">
                    <span>{{ new Date(blog.updatedAt).toLocaleDateString(lang) }}</span>
                </div>
                <div class="spliter"></div>
                <div class="chips">
                    <span>سوپاپ های لاسا</span>
                </div>
            </div>
            <img class="blog-image" itemprop="image" :src="blog.image" alt="">
            <section class="content" v-html="blog.content[lang]"></section>
        </article>
        <p v-else>
            {{ $t("blogs.no-lang-content") }}
        </p>
    </main>
</template>
<script setup>
definePageMeta({
    name: 'blog_single_page',
    auth:false
})
const route = useRoute();
const blogSlug = route.params.slug;
const lang = useI18n().locale;

const { data: blog } = await useFetch(`/api/blogs/${blogSlug}`,{query:{lang:useI18n().locale.value}})
</script>
<style scoped>
article {
    padding-top: calc(var(--menu-height) * 1.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: var(--padding-inline);
}

.post-title {
    font-size: 46px;
}

.blog-data-row {
    width: fit-content;
    display: flex;
    gap: 12px;
    color: #fff;
}

.blog-data-row .chips {
    background: var(--dark-color);
    height: 32px;
    padding: 5px var(--gap);
    display: flex;
    gap: 8px;
    border-radius: 16px;
    align-items: center;
}

.blog-data-row .chips span {
    margin: 0;
    font-size: 14px;
    height: 100%;
    font-family: Kalameh-Light;
    margin-top: 3px;
}

.blog-data-row .spliter {
    width: 1px;
    background: var(--dark-color);
}

.blog-image {
    width: 100%;
    margin-block: 128px 0;
    border-bottom: 2px solid;
}

.content {
    width: 100%;
    max-width: 900px;
    border-inline: 2px solid;
    padding: var(--gap);
}

.content img {
    max-width: 100%;
}
.content h1{
    appearance: none;
}
</style>