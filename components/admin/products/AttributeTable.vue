<template>
<div>
    <table>
        <thead>
            <tr>
                <th>
                    نام ویژگی
                </th>
                <th>
                    نام واحد
                </th>
                <th>
                    مقدار
                </th>
            </tr>
        </thead>
        <tbody>
            <AdminProductsAttributeRow 
            v-for="(att,index) in attributesModel" :key="index"
            :attData="att"
            />
        </tbody>
    </table>
    <button @click="attributesModel.push(new attributeModelMap())">افزودن ویژگی</button>
</div>
</template>
<script setup>
const attributesModel = defineModel()
class attributeModelMap {
    constructor() {
        this.name = {
            fa: "",
            en: ""
        }
        this.unit = {
            fa: "",
            en: ""
        }
        this.value = {
            fa: "",
            en: ""
        }
    }
}
// const attributes = ref([new attributeModelMap()])
</script>