<template>
    <main>
        <h1 class="page-title-large">
            {{ $t('menu.contact') }}
        </h1>
        <div id="wrapper-contact-us">
            <section>
                <p>{{ $t('contact-page.tell-title') }}</p>
                <a v-for="phone in footerSetting.phones" class="button" :href="`tel:${phone}`">
                    <span style="direction: ltr;">
                        {{ phone }}
                    </span>
                </a>
            </section>
            <section>
                <p>
                    {{ $t('contact-page.social-title') }}
                </p>
                <ul class="social-media-list">
                    <li v-for="social in footerSetting.socialMedia">
                        <a :title="social.name" :href="social.link">{{ social.name[0] }}</a>
                    </li>
                </ul>
            </section>
            <section>
                <form @submit.prevent id="message-section">
                    <p>
                        {{ $t('contact-page.message-title') }}
                    </p>
                    <label for>
                        <span>{{ $t('footer.name') }}</span>
                        <input v-model="message.senderName" type="text" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.company') }}</span>
                        <input v-model="message.senderCompany" type="text" />
                    </label>
                    <label for class="vue-tel-input-label">
                        <span>{{ $t('footer.phone') }}</span>
                        <vue-tel-input v-model="message.senderMobile"  mode="international" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.email') }}</span>
                        <input v-model="message.senderEmail" type="email" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.message') }}</span>
                        <textarea v-model="message.message"></textarea>
                    </label>
                    <button class="loading" :disabled="ctaLoading" @click="sendMessage">
                        <span>{{ $t('footer.send') }}</span>
                      </button>
                </form>
            </section>
        </div>
    </main>
</template>
<script setup>
definePageMeta({
    name: 'contact_us',
    auth: false
});
const ctaLoading = ref(false)
const lang = useI18n().locale.value
const footerSetting = useState('default-setting').value?.footer
console.log("footerSetting", footerSetting);
const message = ref({
  senderName: "",
  senderMobile: "",
  senderEmail: "",
  senderCompany: "",
  message: "",
})
async function sendMessage() {
  const { senderName, senderMobile, senderEmail, message: mm } = { ...message.value }
  if (senderName && senderMobile && senderEmail && mm) {
    ctaLoading.value =true
    await $fetch("/api/message", {
      method: "post",
      body: message.value
    }).then(res=>{
      if(res){
        alert(lang=="fa"?"پیام شما با موفقیت ارسال شد":"we received your message. :)")
      }
    }).catch(e=>{
      alert(lang=="fa"?"متاسفانه در ذخیره پیام شما به مشکل بر خوردیم. لطفا برای ارتباط با ما ، تماس بگیرید":"Unfortunately, there was an error receiving your message. Please use the phone number to contact us. :(")

    })
    ctaLoading.value =false

  }else{
    alert(lang=="fa"?"تمامی فیلد ها الزامی هستند":"please fill all of inputs")
  }
}
</script>
<style scoped>
#message-section {
    background: #fff !important;
    border-radius: var(--gap);
    border: 1px solid var(--dark-color);
    padding: var(--gap);
    width: 700px;
    max-width: 100%;
}

main {
    padding-top: calc(var(--menu-height) * 1.8);
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

main>#wrapper-contact-us {
    padding-block: 64px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    border-bottom: 3px solid #ffdd55;
    max-width: 100%;
}

main>#wrapper-contact-us>section {
    background: var(--light-color);
    padding: var(--gap);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    max-width: 100%;
}

main>#wrapper-contact-us>section>p {
    font-size: 18px;
    font-family: Kalameh-Medium;
}

main>#wrapper-contact-us>section>* {
    margin: 0;
}

#wrapper-contact-us::before {
    position: absolute;
    content: "";
    display: inline-block;
    height: 100%;
    width: 3px;
    left: 50%;
    top: 0;
    background: #ffdd55;
    z-index: -1;
}

form {
    display: flex;
    flex-flow: wrap;
    gap: calc(var(--gap) + 12px);
    column-gap: var(--gap);
}

form>p {
    width: 100%;
}

form label {
    position: relative;
    flex: 1;
    width: 100%;
    max-width: 50%;
    min-width: 40%;
}

form label span {
    position: absolute;
    top: 0;
    z-index: 10;
    background: #fff;
    transform: translate(0, -57%);
    font-size: 20px;
    padding-inline: 12px;
    margin-inline-start: 12px;
}

form label:last-of-type,
form>button {
    flex: 2;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 12px;
}

form p {
    font-size: 20px;
}

form>label>input {
    height: 56px !important;
    border-color: var(--dark-color) !important;
}

form>label>textarea {
    border-color: var(--dark-color) !important;
}

form label>textarea {
    height: 150px !important;
    resize: none;
}

form>button {
    margin-top: -12px;
    height: 56px;
    font-family: Kalameh-SemiBold;
    font-size: 20px;
}

@media (max-width:700px) {
    form>label {
        min-width: 100% !important;
    }
}
.social-media-list{
    display: flex;
    gap: var(--gap);
    list-style: none;
    width: fit-content;
    max-width: 300px;
    margin: auto !important;
    padding: 0;
}
.social-media-list a {
    color: var(--dark-color) !important;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bolder;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    background: var(--light-color-green);
}
</style>