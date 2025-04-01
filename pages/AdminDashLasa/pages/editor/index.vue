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
    name: "admin-page-editor",
    layout: "admin"
})
const router = useRouter();
const route = useRoute();
const lang = route.query?.lang;
const pageState = useState('page_state')
if (!lang || !pageState.value) router.go(-1)

const content = ref(pageState.value.content[lang]);
const save = () => {
    let htmlData = content.value.replaceAll('<p></p>', '');
    console.log(htmlData);
    pageState.value.content[lang] = htmlData
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
}
</style>