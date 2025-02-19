<template>
    <main>
        <h2 class="page-title-large">
            {{ $t('menu.blog') }}
        </h2>
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

}

#categories-list li a {
    padding: 6px var(--gap);
}
</style>