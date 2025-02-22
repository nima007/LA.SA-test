<template>
    <main>
        <input type="file" @input="handleFileInput">
        <button @click="saveFile()">sendImage</button>
    </main>
</template>
<script setup>
definePageMeta({
    name:"testfile"
})
    const {files,handleFileInput} = useFileStorage();
    function saveFile() {
        $fetch("/api/admin/products/testFileSave",{
            method:"post",
            body:{
                files:files.value
            }
        })
    }
</script>