<script setup>
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_page",
    layout: "admin"
})
const blogs = ref([
    {
        title: "عنوان",
        description: "توضیحات",
        image: "https://picsum.photos/200/300",
        date: "1400/01/01",
        slug: "slug"
    },
    {
        title: "عنوان",
        description: "توضیحات",
        image: "https://picsum.photos/200/200",
        date: "1400/01/01",
        slug: "slug1"
    },
]);

</script>
<template>
    <main id="blog-page">
        <h1>blogs</h1>
        <NuxtLinkLocale class="button" style="width: fit-content;" :to="{ name: 'admin_dash_blogs_create_page' }">+ ایجاد
            بلاگ</NuxtLinkLocale>
        <section id="blog-list-section">
            <div class="section-title">
                <h2>لیست بلاگ ها </h2>
            </div>
            <ul id="blogs-list">
                <li v-for="blog in blogs" :key="blog.slug">
                    <img :src="blog.image" alt="">
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.description }}</p>
                    <p>{{ blog.date }}</p>
                    <NuxtLinkLocale :to="{ name: 'admin_dash_blogs_update_page', params: { slug: blog.slug } }">ویرایش
                    </NuxtLinkLocale>
                </li>
            </ul>
        </section>
    </main>
</template>
<style scoped>
#blog-page {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

#blog-list-section .section-title {
    border-bottom: 1px solid;
}

#blogs-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    list-style: none;
}
</style>
