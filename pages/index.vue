<template>
    <main>
        <section id="hero-section">
            <h1 style="margin-top: 200px;">
            </h1>
            <h1>{{$t('home')}}</h1>
        </section>
        <home-ValveUsage />
    </main>
</template>
<script setup>
definePageMeta(
    {
        name:"homePage"
    }
)
</script>
<style scoped>
main{
}
section{
    height: 100vh;
    background: var(--light-color);
    overflow: hidden;
}
</style>
