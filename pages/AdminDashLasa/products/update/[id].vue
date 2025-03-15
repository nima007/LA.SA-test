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
                        <li v-for="(file, index) in PrimaryImageFile" :key="index">
                            <img :src="(file.content)" alt="">
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
                        <li v-for="(file, index) in imagesFiles" :key="index">
                            <button class="remove" @click="removeFromNewImages(index)"></button>
                            <img :src="(file.content)" alt="">
                        </li>
                    </ul>
                    <ul id="old-images-list">
                        <li v-for="(image, index) in product.oldImages" :key="index">
                            <button class="remove" @click="removeFromOldImages(index)"></button>
                            <img :src="image" alt="">
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <p> کاتالوگ</p>
                <div style="width: 100% !important;">
                    <label class="fileLabel" for="catalogue-list-input">
                        <input type="file" id="catalogue-list-input" accept="application/pdf"
                            @input="handleCatalogueFile">
                        <p>افزودن کاتالوگ</p>
                    </label>
                    <ul class="files-in-upload">
                        <li v-for="(file, index) in catalogueFiles" :key="index">
                            {{ file.name }}
                        </li>
                    </ul>
                </div>
            </section>
            <button class="loading" :disabled="ctaLoading" @click="updateProduct">بروزرسانی</button>
        </form>
    </main>
</template>
<script setup>
const localeRoute = useLocaleRoute()

definePageMeta({
    title: "ادمین - محصولات",
    name: "admin_products_update",
    layout: "admin"
});
const ctaLoading = ref(false)

const { handleFileInput: handleImagesFiles, files: imagesFiles } = useFileStorage({ clearOldFiles: false })
const { handleFileInput: handleCatalogueFile, files: catalogueFiles } = useFileStorage({ clearOldFiles: false })
const { handleFileInput: handlePrimaryImage, files: PrimaryImageFile } = useFileStorage();
watch(catalogueFiles, () => {
    if (catalogueFiles.value[0]&&catalogueFiles.value[0].name.split(".").at(-1) != "pdf") {
        catalogueFiles.value = [];
        alert("فقط فایل PDF پشتیبانی می شود")
    }
}, { deep: true })
function removeFromNewImages(index) {
    imagesFiles.value.splice(index, 1)
}
function removeFromOldImages(index) {
    product.value.oldImages.splice(index, 1)
}
const product = ref(null)
const route = useRoute()
const { data } = await useFetch(`/api/admin/products/product/${route.params.id}`, { method: 'get' })
if (data) {
    product.value = data.value;
    product.value.oldImages = product.value.images;
    product.value.images = [];
    console.log(product.value);

}
function updateProduct() {
    ctaLoading.value = true
    product.value.primaryImage = PrimaryImageFile.value
    product.value.images = imagesFiles.value;
    product.value.catalogue = catalogueFiles.value
    $fetch(`/api/admin/products/update/${route.params.id}`, {
        method: "put",
        body: product.value
    }).then(res => {
        ctaLoading.value = false
        if (res === true) {
            console.log("Product update successfully")
            alert("محصول با موفقیت بروزرسانی شد");
            const router = localeRoute({
                name: "admin_products_page",
            });
            navigateTo(router.fullPath)
        } else {
            alert("خطا در بروز رسانی محصول ")
            console.log(res);
        }
    }).catch(e=>{
        ctaLoading.value = false
        alert("خطا در بروزرسانی محصول")
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

.files-in-upload,
#old-images-list {
    width: 100%;
    display: flex;
}

.files-in-upload li,
#old-images-list li {
    display: flex;
    width: 200px;
    height: 200px;
    border: 1px solid;
    position: relative;
}

.files-in-upload li .remove,
#old-images-list li .remove {
    position: absolute;
    background: red;
    border-radius: 6px;
}

.files-in-upload li .remove::before,
.files-in-upload li .remove::after,
#old-images-list li .remove::before,
#old-images-list li .remove::after {
    width: 50%;
    height: 3px;
    background: #fff;
    content: "";
    display: inline-block;
    position: absolute;
    transform: rotate(45deg);
}

.files-in-upload li .remove::after,
#old-images-list li .remove::before {
    transform: rotate(-45deg);

}

.files-in-upload li img,
#old-images-list li img {
    max-width: 100%;
    max-height: 100%;
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
<!-- .files-in-upload li,#old-images-list li {

} -->