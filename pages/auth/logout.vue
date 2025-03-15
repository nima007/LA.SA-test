<template>
    <main>
        <button  v-if="isAuth" @click="logout">خروج</button>
    </main>
</template>
<script setup>
definePageMeta({
    path: '/logout',
    // auth: { authenticatedOnly: true,  }
})
const auth = useAuth()
const isAuth = ref(auth.data.value.user)
function logout() {
    auth.signOut()
}
</script>
<style scoped>
    main{
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>