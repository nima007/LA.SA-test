<template>
    <main itemscope itemtype="https://schema.org/Blog">
        <h1 class="page-title-large">
            {{ $t('menu.blog') }}
        </h1>
        <p class="blogs-intro">
            {{ $t('blogs.intro') }}
        </p>
        <section id="blogs-and-categories-wrapper">
            <ul id="categories-list">
                <li>
                    <NuxtLinkLocale :to="{query:{}}">همه </NuxtLinkLocale>
                </li>
                <li v-for="category in categoryList">
                    <NuxtLinkLocale :class="{'current-query':categoryFilter==category.slug}" :to="{query:{'filter':category.slug}}">{{ category.name }}  </NuxtLinkLocale>
                </li>
            </ul>
        </section>
        <section>
            <ul v-if="blogsList" id="blog-list">
                <li v-for="blog in blogListFilterdByLang">
                    <BlogThumbBlog :blog-data="blog"></BlogThumbBlog>
                </li>
            </ul>
        </section>
    </main>
</template>
<script setup>
definePageMeta({
    name: 'blogs_index',
    auth:false,
    title:"pages-title.blogs"

})
const route = useRoute()

const { data: blogsList } = await useFetch('/api/blogs', { query: { lang: useI18n().locale.value } });
console.log("blogList", blogsList);
let categories = blogsList.value ? blogsList.value.map(blog=>blog.categories).flat():[]
console.log("categories" , categories);
const lang = useI18n().locale;

const categoryList = computed(()=>{
    let listObject =  Object.groupBy(categories,({slug})=>{
        return slug
    })
    const list = []
    for(const cat in listObject){
        console.log(cat);
        console.log(listObject[cat]);
        list.push({slug:cat,name:listObject[cat][0].name[lang.value]})
    }
    return list
})
console.log("cl",categoryList.value,typeof categoryList.value);

let x = `blog.title[${lang.value}]`
const categoryFilter = ref(route.query.filter||false)

const blogListFilterdByLang = computed(() => {
    return blogsList.value.filter(blog => blog.title[lang.value]&&(!categoryFilter.value||blog.categories.map(cat=>cat.slug).includes(categoryFilter.value)))
})

onMounted(()=>{
    watch(route,()=>{
        console.log("change :", route.query.filter);
        
        categoryFilter.value = route.query.filter||false
    })
    
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
    list-style: none;
    align-self: center;

}

#categories-list li a {
    padding: 12px;
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

#categories-list li a:hover,#categories-list li a.current-query {
    background: var(--dark-color);
    color: var(--light-color);
    padding-inline: var(--gap);
    font-size: 16px;
}

section {
    width: 100%;
}

#blog-list {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(var(--gap) * 2);
    padding: 0;
    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: 580px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    

}
</style>