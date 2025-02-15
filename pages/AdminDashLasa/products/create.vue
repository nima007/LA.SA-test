<template>
    <main>
        <h1>ادمین - محصولات</h1>
        <form @submit.prevent>
            <input type="text" placeholder="نام محصول" />
            <textarea placeholder="توضیحات" />
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
                    <tr>
                        <td>
                            <input type="text">
                        </td>
                        <td>
                            <input type="text">
                        </td>
                        <td>
                            <input type="text">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text">
                        </td>
                        <td>
                            <input type="text">
                        </td>
                        <td>
                            <input type="text">
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">ثبت</button>
        </form>
    </main>
</template>
<script setup>
definePageMeta({
    title: "ادمین - محصولات",
    name: "admin_products_create"
});
</script>
<style scoped></style>