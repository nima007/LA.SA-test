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