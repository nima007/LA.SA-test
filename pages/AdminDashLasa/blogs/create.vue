<script setup>
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_create_page",
    layout: "admin"
})
const blog = ref({
    title: {
        fa: "",
        en: "",
    },
    description: {
        fa: "",
        en: ""
    },
    content: {
        fa: "",
        en: ""
    },
    image: null,
    slug: ""
});
const BlogState = useState('blog_state')
if (!BlogState.value) {
    BlogState.value = blog.value
} else {
    blog.value = BlogState.value
}
async function saveBlog() {
    let res = await useFetch("/api/admin/blogs",
        {
            method: "post",
            body: blog.value
        }
    )
    console.log("blog res ", res);
    console.log("blog res error", res.error);
    console.log(useError(res.error))

}
</script>
<template>
    <main>
        <h1>ویرایش بلاگ</h1>
        <AdminBlogsDataInputs v-model="blog"></AdminBlogsDataInputs>
        <button style="width: 100%;" @click="saveBlog">ثبت</button>
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
