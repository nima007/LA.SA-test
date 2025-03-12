<script setup>
import  FrontBlog from '~/utils/FrontBlog';
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_update_page",
    layout: "admin"
})

const route = useRoute();
const slug = route.params.slug;
console.log("slug",slug);

const blog = ref(null);
const { data } = await useFetch(`/api/admin/blogs/blog/${slug}`, {
    method: 'get',
})
console.log(data);

if(data){
    blog.value = new FrontBlog(data.value.title,data.value.content,data.value.image,data.value.slug)

}

const BlogState = useState('blog_state')
if (!BlogState.value) {
    BlogState.value = {...blog.value}
} else {
    blog.value = BlogState.value
}

async function updateBlog() {
    if (typeof blog.value.image[0] == "string") {
        delete blog.value.image
    }
    console.log("blog.value " ,{...blog.value});
    
    let res = await useFetch(`/api/admin/blogs/blog/${slug}`,
        {
            method: "put",
            body: {...blog.value}
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
        <AdminBlogsDataInputs v-if="blog" v-model="blog"></AdminBlogsDataInputs>
        <button style="width: 100%;" @click="updateBlog">ثبت</button>
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
