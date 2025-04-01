<script setup>
definePageMeta({
    title: "ادمین - بلاگ",
    name: "admin_dash_blogs_page",
    layout: "admin"
})
useState('blog_state').value = null

const { data: blogData } = await useFetch("/api/admin/blogs", {
    method: 'get'
})
const { data: categories } = await useFetch("/api/admin/blogs/category", {
    method: 'get'
})
const categoryForm = ref({
    name: {
        fa: "",
        en: ""
    }
})
const saveCategoryLoading = ref(false);
async function saveCategory() {
    saveCategoryLoading.value = true
    await $fetch('/api/admin/blogs/category', {
        method: 'post',
        body: categoryForm.value
    }).then(res => {
        console.log(res);
        alert("ثبت شد !")
        categoryForm.value.name.fa = "";
        categoryForm.value.name.en = "";
        if (typeof categories) {
            categories.value.push(res)
        } else {
            categories.value = [res]
        }

    }).catch(e => {
        alert("خطا در ثبت")
    }
    )
    saveCategoryLoading.value = false
}
</script>
<template>
    <main id="blog-page">
        <h1>blogs</h1>


        <section>
            <div class="section-title">
                <h2>دسته بندی ها</h2>
            </div>
            <form id="category-form" @submit.prevent>
                <h3> دسته بندی جدید : </h3>
                <div class="row">
                    <label for="">
                        <span>فارسی</span>
                        <input v-model="categoryForm.name.fa" type="text">
                    </label>
                    <label for="">
                        <span>eng</span>
                        <input v-model="categoryForm.name.en" type="text">
                    </label>
                    <button :disabled="saveCategoryLoading" class="loading" @click="saveCategory">
                        <span>
                            ثبت دسته بندی
                        </span>
                    </button>
                </div>
            </form>
            <ul v-if="categories" id="category-list">
                <li v-for="category in categories" :key="category.slug">
                    <p> فارسی : <strong>{{ category.name.fa }}</strong> | <strong>{{ category.name.en }}</strong> : en
                    </p>
                </li>
            </ul>
        </section>
        <NuxtLinkLocale class="button" style="width: fit-content;" :to="{ name: 'admin_dash_blogs_create_page' }">+ ایجاد بلاگ</NuxtLinkLocale>
        <section id="blog-list-section">
            <div class="section-title">
                <h2>لیست بلاگ ها </h2>
            </div>
            <ul v-if="blogData" id="blogs-list">
                <li v-for="blog in blogData" :key="blog.slug">
                    <img :src="blog.image" alt="">
                    <h3>{{ blog.title.fa || blog.title.en }}</h3>
                    <p>{{ blog.description.fa || blog.description.en }}</p>
                    <p>{{ new Date(blog.createdAt).toLocaleString('fa-IR') }}</p>
                    <NuxtLinkLocale :to="{ name: 'admin_dash_blogs_update_page', params: { slug: blog.slug } }">ویرایش
                    </NuxtLinkLocale>
                </li>
            </ul>
        </section>
    </main>
</template>
<style scoped>
#category-form {
    border: 1px solid;
    padding: var(--gap);
    border-radius: var(--gap);
}

#category-form .row {
    display: flex;
    gap: var(--gap);
    align-items: end;
}

#blog-page {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

main>section .section-title {
    border-bottom: 1px solid;
    margin-bottom: var(--gap);
}

#blogs-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, .5fr));
    gap: 16px;
    list-style: none;
}

#blogs-list>li {
    overflow: hidden;
}

#blogs-list>li img {
    max-width: 100%;
}

#category-list li {
    border-bottom: 1px solid #0005;
}
</style>
