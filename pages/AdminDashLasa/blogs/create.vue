<script setup>
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_create_page",
    layout: "admin"
})
const ctaLoading = ref(false)
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
    slug: "",
    categories:[]
});
const BlogState = useState('blog_state')
if (!BlogState.value) {
    BlogState.value = blog.value
} else {
    blog.value = BlogState.value
}
async function saveBlog() {
    ctaLoading.value=true
   await $fetch("/api/admin/blogs",
        {
            method: "post",
            body: blog.value
        }
    ).then(res=>{
        ctaLoading.value=false
        alert("بلاگ ثبت شد")
    }).catch(e=>{
        ctaLoading.value=false
        alert("خطا در ثبت بلاگ")
    })
}
</script>
<template>
    <main>
        <h1>ویرایش بلاگ</h1>
        <AdminBlogsDataInputs v-model="blog"></AdminBlogsDataInputs>
        <button class="loading" :disabled="ctaLoading" style="width: 100%;" @click="saveBlog">ثبت</button>
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
