<script setup>
import FrontBlog from '~/utils/FrontBlog';
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_update_page",
    layout: "admin"
})

const route = useRoute();
const slug = route.params.slug;
const ctaLoading = ref(false)

const blog = ref(null);
const { data } = await useFetch(`/api/admin/blogs/blog/${slug}`, {
    method: 'get',
})
console.log(data);

if (data) {
    blog.value = new FrontBlog(data.value.title, data.value.content, data.value.image, data.value.slug,data.value?.categories||[])

}

const BlogState = useState('blog_state')
if (!BlogState.value) {
    BlogState.value = { ...blog.value }
} else {
    blog.value = BlogState.value
}

async function updateBlog() {
    ctaLoading.value = true
    const blogData = {...blog.value}
    if (typeof blog.value.image[0] == "string") {
        delete blogData.image
    }
    console.log("blog.value ", { ...blog.value });

    await $fetch(`/api/admin/blogs/blog/${slug}`,
        {
            method: "put",
            body: blogData
        }
    ).then(res => {
        if (res) {
            ctaLoading.value = false
            alert("بلاگ با موفقیت به روز رسانی شد");
        }
    }).catch(e => {
        ctaLoading.value = false
        alert("خطا در بروز رسانی بلاگ")
    })
}
</script>
<template>
    <main>
        <h1>ویرایش بلاگ</h1>
        <AdminBlogsDataInputs v-if="blog" v-model="blog"></AdminBlogsDataInputs>
        <button class="loading" :disabled="ctaLoading" style="width: 100%;" @click="updateBlog">ثبت</button>
    </main>
</template>
<style scoped>
section {
    margin: 16px 0;
    border-bottom: 1px solid #000;
    padding: 16px;
}

.blog-content-language {
    border-bottom: 1px solid #000;
    padding: 16px;
}

.blog-content-language:last-child {
    border-bottom: none
}
</style>
