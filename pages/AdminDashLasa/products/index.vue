<template>
    <main>

        <h1> محصولات</h1>
        <ul>
            <li>
                <NuxtLinkLocale class="button" style="width: fit-content;" :to="{ name: 'admin_products_create' }">+
                    ایجاد محصول
                </NuxtLinkLocale>
            </li>

        </ul>
        <table v-if="data">
            <thead>
                <tr>
                    <th>ردیف</th>
                    <th>نام محصول</th>
                    <th>مشاهده</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in data" :key="product._id">
                    <td>{{++index }}</td>
                    <td>
                        <p>{{ product.name.fa }}</p>
                    </td>
                    <td style="padding: 16px; direction: ltr;">
                        <NuxtLinkLocale class="button" style="width: fit-content;"
                            :to="{ name: 'admin_products_update', params: { 'id': product._id } }">ویرایش</NuxtLinkLocale>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>
<script setup>
import { NuxtLinkLocale } from '#components';

definePageMeta({
    name: "admin_products_page",
    layout: "admin"
})
const { data, error } = await useFetch('/api/admin/products', { method: 'get' })
console.log("product list : ", data);

</script>