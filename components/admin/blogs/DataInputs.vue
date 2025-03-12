<script setup>
const blogModel = defineModel();
const { handleFileInput: handleImage, files: imageFiles } = useFileStorage({ clearOldFiles: true })
console.log("imageFiles: ", imageFiles);

watch(imageFiles, () => {
    console.log("ChangeimageFiles: ", imageFiles);

    blogModel.value.image = imageFiles.value
}, { deep: true })

</script>
<template>
    <form v-if="blogModel" @submit.prevent>
        <section>
            <h2>تصویر</h2>
            <div>
                <label class="fileLabel" for="image-input">
                    <input type="file" id="image-input" @input="handleImage">
                    <p>افزودن تصویر</p>
                    <img v-for="(file, index) in blogModel.image" :key="index" :src="(file.content)||file" alt="">
                </label>
            </div>
        </section>
        <section>
            <h2>دسته بندی</h2>
            <div>
                <label>
                    <p>افزودن تصویر</p>
                    <select style="width: auto;" name="" id="">
                        <option value="" disabled selected> یک دسته بندی انتخاب کنید</option>
                    </select>
                </label>
            </div>
        </section>
        <section>
            <h2>محتوا</h2>
            <div class="blogModel-content-language">
                <h3>فارسی</h3>
                <label for="">
                    <p>تیتر</p>
                    <input class="title-input" type="text" v-model="blogModel.title.fa" placeholder="عنوان بلاگ" />
                </label>
                <label for="">
                    <p>محتوا</p>
                    <textarea v-model="blogModel.content.fa" placeholder="محتوا" />
                </label>
                <NuxtLinkLocale :to="{ name: 'admin-blog-editor', query: { 'lang': 'fa' } }">ویرایش محتوا</NuxtLinkLocale>
            </div>
            <div class="blogModel-content-language">
                <h3>eng</h3>
                <label for="">
                    <p>تیتر</p>
                    <input class="title-input" type="text" v-model="blogModel.title.en" placeholder="عنوان بلاگ" />
                </label>
                <label for="">
                    <p>محتوا</p>
                    <textarea v-model="blogModel.content.en" placeholder="محتوا" />
                </label>
                <NuxtLinkLocale :to="{ name: 'admin-blog-editor', query: { 'lang': 'en' } }">ویرایش محتوا</NuxtLinkLocale>

            </div>
        </section>

    </form>
</template>
<style scoped>
section {
    margin: 16px 0;
    border-bottom: 1px solid #000;
    padding: 16px;
    display: flex;
    flex-direction: column;
}

section>*:not(h2) {
    margin-inline: 16px;
}

section>div {
    padding-bottom: 16px;
}

section>div:not(:last-child) {
    border-bottom: 1px solid #0003;
}

h2 {
    border-inline-start: 5px solid;
    padding-inline-start: 16px;
}

h3 {
    border-bottom: 2px solid;
    padding: 8px 0;
    width: fit-content;
}

.blog-content-language {
    border-bottom: 1px solid #000;
    padding: 16px;
}

.blog-content-language:last-child {
    border-bottom: none
}

input[type=file] {
    display: none;
}

.fileLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    padding: 16px;
    cursor: pointer;
    width: 200px;
    aspect-ratio: 1/1;
    position: relative;

}

.fileLabel img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    z-index: -1;
}

.fileLabel p {
    color: #fff;
    mix-blend-mode: difference;
}

.title-input {
    width: 300px !important;
}
</style>