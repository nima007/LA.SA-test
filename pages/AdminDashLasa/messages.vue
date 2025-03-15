<template>
    <main>
        <ul>
            <AdminMessage v-for="message in adminDashState.messages" :message="message"></AdminMessage>

        </ul>
    </main>
</template>
<script setup>
definePageMeta({
    name: "admin_messages_page",
    layout: "admin"
})
const adminDashState = useState("admin-dash-state")
useFetch("/api/admin/messsages", { method: "get" }).then(res => {
    adminDashState.value.messages = res.data.value
})
</script>
<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap);
}
</style>