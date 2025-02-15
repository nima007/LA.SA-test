<template>
    <main>
        <h1>ادمین - محصولات</h1>
        <form @submit.prevent>
            <section>
                <div>fa</div>
                <div>en</div>
            </section>
            <section>
                <div>
                    <input type="text" placeholder="نام محصول" />
                    <textarea placeholder="توضیحات" />
                </div>
                <div>
                    <input type="text" placeholder="نام محصول" />
                    <textarea placeholder="توضیحات" />
                </div>
            </section>
            <section>
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
                </div>
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
                </div>
            </section>
            <section>
                <p>
                    تصویر اصلی
                </p>
                <div style="width: 100% !important;"></div>

            </section>
            <section>
                <p>لیست تصاویر</p>
                <div style="width: 100% !important;"></div>
            </section>
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
<style scoped>
main{
    padding-top: 150px;
}
form{
    width: 100%;
}
form > section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 24px;
    border-bottom: 2px solid #000;
    padding-bottom: 24px;
}
form > section > div{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;
    padding-inline: 24px;
    gap: 24px;
}
form > section > div:first-of-type{
    border-inline-end: 1px solid #000;
}
</style>