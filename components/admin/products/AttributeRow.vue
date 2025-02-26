<template>
    <tr>
        <td>
            <input v-model="attData.name.fa" placeholder="فارسی" type="text">
            <input v-model="attData.name.en" placeholder="english" type="text">
        </td>
        <td>
            <input v-model="attData.unit.fa" placeholder="فارسی" type="text">
            <input v-model="attData.unit.en" placeholder="english" type="text">
        </td>
        <td>
            <input v-model="attData.value.fa" placeholder="فارسی" type="text">
            <input v-model="attData.value.en" placeholder="english" type="text">
        </td>
        <td><button @click="emit('removeAtt')">حذف</button></td>
    </tr>
</template>

<script setup>
const props = defineProps(['attData'])
const emit = defineEmits(['removeAtt'])

</script>

<style scoped>
td {
    padding-inline: 8px;
}

input {
    border-color: #444 !important;
    margin: 4px;
}
</style>