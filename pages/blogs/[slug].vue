<template>
    <main itemscope itemtype="https://schema.org/Article" >
         <h1 itemprop="headline" class="post-title">Blog Post Title</h1>
        <div class="blog-data-row">
            <div class="date-chips chips">
                <img src="~/assets/images/cal.svg" alt="">
                <span>10/11/1404</span>
            </div>
            <div class="spliter"></div>
            <div class="chips">
                <span>سوپاپ های لاسا</span>
            </div>
        </div>
        <img class="blog-image" itemprop="image" src="~/assets/images/blg.jpg" alt="">
    </main>
</template>
<script setup>
definePageMeta({
    name:'blog_single_page'
})
</script>
<style scoped>
main {
    padding-top: calc(var(--menu-height) * 1.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: var(--padding-inline);
}
.post-title{
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
.blog-data-row .chips span{
    margin: 0;
    font-size: 14px;
    height: 100%;
    font-family: Kalameh-Light;
    margin-top: 3px;
}

.blog-data-row .spliter{
    width: 1px ;
    background: var(--dark-color);
}
.blog-image{
    width: 100%;
    margin-block: 128px 64px;
}
</style>