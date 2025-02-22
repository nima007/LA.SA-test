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
            <section class="primary-image-section">
                <p>
                    تصویر اصلی
                </p>

                <div style="width: 100% !important;">
                    <label class="fileLabel" for="primary-image-input">
                        <input type="file" id="primary-image-input" @input="handlePrimaryImage">
                        <p>افزودن تصویر اصلی</p>
                    </label>
                    <ul class="files-in-upload">
                        <li v-for="file in PrimaryImageFile">
                            <img  :src="(file.content)" alt="">

                        </li>
                    </ul>
                </div>

            </section>
            <section>
                <p>لیست تصاویر</p>
                <div style="width: 100% !important;">
                    <label class="fileLabel" for="image-list-input">
                        <input type="file" id="image-list-input" @input="handleImagesFiles">
                        <p>افزودن تصویر به لیست تصاویر</p>
                    </label>
                    <ul class="files-in-upload">
                        <li v-for="file in imagesFiles">
                            <img  :src="(file.content)" alt="">
                        </li>
                    </ul>
                </div>
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
const { handleFileInput: handleImagesFiles, files: imagesFiles } = useFileStorage({ clearOldFiles: false })
const { handleFileInput: handlePrimaryImage, files: PrimaryImageFile } = useFileStorage()
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
    product.value.primaryImage = PrimaryImageFile.value
    $fetch("/api/admin/products/create", {
        method: "POST",
        body: product.value
    }).then(res => {
        if (res.ok) {
            console.log("Product created successfully")
        }
    })
}
</script>
<style scoped>
.fileLabel {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    padding: var(--gap);
    text-align: center;
    cursor: pointer;
}

.fileLabel input {
    display: none;
}
.files-in-upload{
    width: 100%;
    display: flex;
}
.files-in-upload li{
    display: flex;
    width: 200px;
    height: 200px;
    border: 1px solid;
}
.files-in-upload li img{
    max-width: 100%;
    max-height: 100%;
}
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