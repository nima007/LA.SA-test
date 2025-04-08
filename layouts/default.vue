<template>
    <div id="default-layout">
        <Menu></Menu>
        <NuxtPage />
        <ClientOnly>
            <GetCustomerInfo v-if="showGetCustomerInfo" @close-get-customer-info="showGetCustomerInfo=false" />
        </ClientOnly>
        <Footer />
    </div>
</template>
<script setup>
// import { useRoute } from 'vue-router';
const route = useRoute()
const {t}=useI18n();
useHead({
    titleTemplate:()=>{
       const title =  route?.meta?.title ? t(route.meta.title):"LASA"
       return `LASA - ${title}`
    }
})
const showGetCustomerInfo = ref(false);
setTimeout(()=>{
    showGetCustomerInfo.value=true;
},5000)
const defaultSetting = useState('default-setting');
useFetch("/api/setting", {
    method: "get",
}).then(res => {
    if (res.data.value)
        defaultSetting.value = res.data.value
})
</script>