<template>
    <div id="editor-page">
        <ClientOnly>
            <AdminTiptapEditor v-model="content" />
        </ClientOnly>
        <section id="section-html-content" dir="ltr" style="direction: ltr; text-align: right;">
            <code>
                {{ content }}
            </code>
            <button @click="save">ذخیره</button>

        </section>
    </div>
</template>
<script setup>
definePageMeta({
    name: "admin-blog-editor",
    layout: "admin"
})
const router = useRouter();
const route = useRoute();
const lang = route.query?.lang;
const blogState = useState('blog_state')
if (!lang || !blogState.value) router.go(-1)

const content = ref(blogState.value.content[lang]);
const save = () => {
    let htmlData = content.value.replaceAll('<p></p>', '');
    console.log(htmlData);
    blogState.value.content[lang] = htmlData
    router.go(-1)
}

</script>
<style scoped>
#editor-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

#editor-area {
    flex: 1;
}

#section-html-content {
    border-top: 1px solid;
    height: 200px;
    display: flex;
    padding: var(--gap);
    gap: var(--gap);
}
#section-html-content code{
    flex: 1;
    overflow: auto;
    height: 100%;
}
</style>