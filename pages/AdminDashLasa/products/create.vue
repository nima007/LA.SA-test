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
                    <input type="text" v-model="product.name.fa" placeholder="نام محصول" />
                    <textarea v-model="product.description.fa" placeholder="توضیحات" />
                </div>
                <div>
                    <input type="text" v-model="product.name.en" placeholder="نام محصول" />
                    <textarea v-model="product.description.en" placeholder="توضیحات" />
                </div>
            </section>
            <section>
                <AdminProductsAttributeTable style="width: 100% !important;" v-model="product.attributes" />
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
            <button @click="saveProduct">ثبت</button>
        </form>
    </main>
</template>
<script setup>
definePageMeta({
    title: "ادمین - محصولات",
    name: "admin_products_create"
});

const product = ref({
    name: {
        fa: "",
        en: ""
    }, description: {
        fa: "",
        en: ""
    }, attributes: [

    ],
    images: [],
    primaryImage: {},
    // catalogue: []
})
function saveProduct() {
    $fetch("/api/admin/products/create", {
        method: "POST",
        body: JSON.stringify(product.value)
    }).then(res => {
        if (res.ok) {
            console.log("Product created successfully")
        }
    })
}
</script>
<style scoped>
main {
    padding-top: 150px;
}

form {
    width: 100%;
}

form>section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 24px;
    border-bottom: 2px solid #000;
    padding-bottom: 24px;
}

form>section>div {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;
    padding-inline: 24px;
    gap: 24px;
}

form>section>div:first-of-type {
    border-inline-end: 1px solid #000;
}
</style>