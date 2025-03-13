<template>
    <main>
        <h1 class="page-title">{{ $t('menu.downloads') }}</h1>
        <ul id="catalogue-list">
            <li v-for="cata in products">
                <a :href="cata.catalogue" download>
                    <img class="prd-image" :src="cata.primaryImage" alt="">
                    <p> {{$t('catalogue')}} {{ cata.name[lang] }}</p>
                    <button style="font-size:20px">{{$t('download-catalogue')}}</button>
                </a>
            </li>
        </ul>
    </main>
</template>
<script setup>
definePageMeta({
    name: "catalogue_page",
    layout: "default"
})
const lang = useI18n().locale.value
const products = ref([])
await useFetch("/api/catalogues",{
    method:"get",
    query:{lang}
}).then(res=>
    products.value = res.data.value
)
</script>
<style scoped>
main {
    padding: var(--padding-inline);
    padding-top: calc(var(--menu-height) * 2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page-title {
    width: 100%;
}

#catalogue-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
    gap: var(--gap);
    margin-block: 64px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 980px) {
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 600px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
}

#catalogue-list li {
    width: 100%;
    overflow: hidden;
}

#catalogue-list li>a {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--dark-color);
    border-radius: var(--gap);
    padding: var(--gap);
    color: #fff;
    text-decoration: none;
    text-align: center;
    font: 24px Kalameh-Medium;
}

#catalogue-list li>a .prd-image {
    margin: 15% 25%;
}
</style>
