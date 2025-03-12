<template>
    <div id="default-layout">
        <Menu></Menu>
        <NuxtPage />
        <Footer />
    </div>
</template>
<script setup>
const defaultSetting = useState('default-setting');
useFetch("/api/setting", {
    method: "get",
}).then(res => {
    if (res.data.value)
        defaultSetting.value = res.data.value
})
</script>