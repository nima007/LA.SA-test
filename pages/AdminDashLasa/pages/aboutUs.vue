<template>
    <main>
        <h1>
            صفحه درباره ما
        </h1>
        <form @submit.prevent v-if="page.content">
            <section >
                <h2>
                    محتوا
                </h2>
                <div class="conent-language">
                    <h3> فارسی</h3>
                    <textarea v-model="page.content.fa" name="" id=""></textarea>
                    <NuxtLinkLocale :to="{ name: 'admin-page-editor', query: { 'lang': 'fa' } }">ویرایش محتوا
                    </NuxtLinkLocale>
                </div>
                <div class="conent-language">
                    <h3> eng</h3>
                    <textarea v-model="page.content.en" name="" id=""></textarea>
                    <NuxtLinkLocale :to="{ name: 'admin-page-editor', query: { 'lang': 'en' } }">ویرایش محتوا
                    </NuxtLinkLocale>
                </div>
            </section>
            <button @click="save" class="loading" :disabled="ctaLoadingStatus">ثبت</button>
        </form>
    </main>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    name: "admin-aboutus-page-contents-page"
});
const page = ref(null)
await useFetch('/api/admin/pages/aboutus', { method: 'get' }).then(res=>{
    if(res.data.value){
        page.value = res.data.value
    }else{
        page.value={
            content:{
                fa:"",
                en:""
            }
        }
    }
})

const pageState = useState('page_state')

if (!pageState.value) {
    pageState.value = page.value
} else {
    console.log("assin to page");
    
    page.value = pageState.value
}
const ctaLoadingStatus =ref(false)
async function save(){
    ctaLoadingStatus.value=true
    await $fetch('/api/admin/pages/aboutus',{method:"post",body:page.value}).then(res=>{
        console.log(res);
    }).catch(e=>{
        console.log(JSON.parse(e.statusMessage));
        alert(e.statusMessage)
        
    })
    ctaLoadingStatus.value=false
}
</script>
<style scoped>
h2 {
    border-inline-start: 5px solid;
    padding-inline-start: 16px;
}

h3 {
    border-bottom: 2px solid;
    padding: 8px 0;
    width: fit-content;
}

.content-language {
    border-bottom: 1px solid #000;
    padding: 16px;
}

.content-language:last-child {
    border-bottom: none
}
</style>