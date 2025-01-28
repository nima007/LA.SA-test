<template>
    <main>
        <section id="hero-section">
            <h1 style="margin-top: 200px;">
            </h1>
            <p>{{ $t('welcome') }}</p>
        </section>
        <home-ValveUsage />
    </main>
</template>
<script setup>
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