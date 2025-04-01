<template>
    <main>
        <ul>
            <li>
                <NuxtLinkLocale :to="{
                    name:'admin-aboutus-page-contents-page'
                }">
                    درباره ما
                </NuxtLinkLocale>
            </li>
        </ul>

    </main>
</template>
<script setup>
definePageMeta({
    name:"admin-pages-contents-page",
    layout:"admin"
})
</script>