<template>
    <main>
        <h1>تنظیمات</h1>
        <section id="footer-data">
            <form @submit.prevent>
                <h2>اطلاعات فوتر</h2>
                <div class="group-input">
                    <p>شماره تماس ها</p>
                    <ol>
                        <li v-for="(phone, i) in footerForm.phones">
                            <label for="">
                                <p> {{ i + 1 }}. شماره تماس</p>
                                <input class="phone-input" v-model="footerForm.phones[i]" type="text"
                                    placeholder="+98913xxxxxxx">
                            </label>
                        </li>
                    </ol>
                    <button @click="addNewPhoneNumberToFooter">افزودن شماره تماس</button>
                </div>
                <div class="group-input">
                    <p>پیام رسانها و شبکه های اجتمایی</p>
                    <ol>
                        <li v-for="(_, i) in footerForm.socialMedia">
                            {{ i + 1 }}.
                            <label for="">
                                <p> نام شبکه به انگلیسی </p>
                                <input class="phone-input" v-model="footerForm.socialMedia[i].name" type="text"
                                    placeholder="+98913xxxxxxx">
                            </label>
                            <label for="">
                                <p> لینک شبکه </p>
                                <input class="phone-input" v-model="footerForm.socialMedia[i].link" type="text"
                                    placeholder="+98913xxxxxxx">
                            </label>
                        </li>
                    </ol>
                    <button @click="addNewSocialMediaToFooter">افزودن شبکه</button>
                </div>
                <div class="group-input">
                    <label for="">
                        <p>آدرس </p>
                        <textarea v-model="footerForm.address" name="" id=""></textarea>
                    </label>
                </div>
                <button @click="updateFooterData">تایید</button>
            </form>
        </section>
    </main>
</template>
<script setup>
definePageMeta({
    name: "admin_setting_page",
    layout: "admin"
})
const footerForm = ref({
    phones: [],
    socialMedia: [],
    address: ""
})
await useFetch("/api/admin/setting/footer", {
    method: "get"
}).then(res => {
    console.log("res", res.data.value);
    if (res.data.value) {
        console.log("hey");
        console.log(res.data.value.phones);
        
        footerForm.value.phones = res.data.value.phones;
        footerForm.value.socialMedia = res.data.value.socialMedia;
        footerForm.value.address = res.data.value.address;
    }
})

function updateFooterData() {
    $fetch("/api/admin/setting/footer", {
        method: "post",
        body: footerForm.value
    })
}


function addNewPhoneNumberToFooter() {
    footerForm.value.phones.push("")
}
function addNewSocialMediaToFooter() {
    footerForm.value.socialMedia.push({
        name: "",
        link: ""
    })
}
</script>
<style scoped>
.phone-input {
    text-align: left;
    direction: ltr;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #dedede;
    padding: 16px;
    border-radius: 16px;
}

form label {
    display: flex;
    flex-direction: column;
    max-width: 300px;
}

.group-input {
    border: 2px solid;
    border-radius: 8px;
    padding: 16px;
}

.group-input>ol>li {
    display: flex;
    gap: 8px;
}
</style>