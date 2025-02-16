<template>
    <tr>
        <td>
            <input v-model="attData.name.fa" type="text">
            <input v-model="attData.name.en" type="text">
        </td>
        <td>
            <input v-model="attData.unit.fa" type="text">
            <input v-model="attData.unit.en" type="text">
        </td>
        <td>
            <input v-model="attData.value.fa" type="text">
            <input v-model="attData.value.en" type="text">
        </td>
    </tr>
</template>

<script setup>
const props = defineProps(['attData'])

</script>

<style></style>