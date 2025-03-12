<script setup>
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_page",
    layout: "admin"
})
useState('blog_state').value = null

const {data:blogData} = await useFetch("/api/admin/blogs",{
    method:'get'
})
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
            <ul v-if="blogData" id="blogs-list" >
                <li v-for="blog in blogData" :key="blog.slug">
                    <img :src="blog.image" alt="">
                    <h3>{{ blog.title.fa||blog.title.en }}</h3>
                    <p>{{ blog.description.fa||blog.description.en  }}</p>
                    <p>{{ new Date(blog.createdAt).toLocaleString('fa-IR') }}</p>
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
    grid-template-columns: repeat(auto-fill, minmax(250px, .5fr));
    gap: 16px;
    list-style: none;
}
#blogs-list > li{
    overflow: hidden;
}
#blogs-list > li img{
    max-width: 100%;
}
</style>
