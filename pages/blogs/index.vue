<template>
    <main itemscope itemtype="https://schema.org/Blog" >
        <h1 class="page-title-large">
            {{ $t('menu.blog') }}
        </h1>
        <p class="blogs-intro">
            {{ $t('blogs.intro') }}
        </p>
        <section id="blogs-and-categories-wrapper">
            <ul id="categories-list">
                <li>
                    <a href="">همه</a>
                </li>
                <li>
                    <a href="">سوپاپ های لاسا</a>
                </li>
            </ul>
        </section>
        <section>
            <ul id="blog-list">
                <li>
                    <BlogThumbBlog></BlogThumbBlog>
                </li>
                <li>
                    <BlogThumbBlog></BlogThumbBlog>
                </li>
                <li>
                    <BlogThumbBlog></BlogThumbBlog>
                </li>
                <li>
                    <BlogThumbBlog></BlogThumbBlog>
                </li>
            </ul>
        </section>
    </main>
</template>
<script setup>
definePageMeta({
    name: 'blogs_index'
})
</script>
<style scoped>
main {
    padding-top: calc(var(--menu-height) * 1.8);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blogs-intro {
    font-family: Kalameh-Light;
    font-size: 24px;
    width: 850px;
    max-width: 100%;
    text-align: center;
    margin-top: 0;
}

#blogs-and-categories-wrapper {
    width: 100%;
}

#categories-list {
    width: 100%;
    border-bottom: 1px solid var(--dark-color);
    overflow-x: auto;
    padding: 12px 0;
    display: flex;
    list-style:none;
    align-self: center;

}

#categories-list li a {
    padding: 12px ;
    font-size: 20px;
    font-family: Kalameh-Medium;
    color: var(--dark-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: .3s;
    border-radius: 50px;
    min-height: 54px;
    height: fit-content;
}
#categories-list li a:hover{
    background: var(--dark-color);
    color: var(--light-color);
    padding-inline: var(--gap);
    font-size: 16px;
}
section{
    width: 100%;
}
#blog-list{
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: calc(var(--gap) * 2);
    padding: 0;
}
</style>