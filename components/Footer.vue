<template>
  <footer>
    <div class="top-space"></div>
    <div class="bottom-space">
      <img id="footer-logo" src="~/assets/images/LASA_Logo.png" alt />
      <div class="first">
        <p class="heading-title">{{ $t('footer.contact-us') }}</p>
        <form @submit.prevent>
          <label for>
            <span>{{ $t('footer.name') }}</span>
            <input v-model="message.senderName" type="text" />
          </label>
          <label for>
            <span>{{ $t('footer.company') }}</span>
            <input v-model="message.senderCompany" type="text" />
          </label>
          <label for>
            <span>{{ $t('footer.phone') }}</span>
            <vue-tel-input v-model="message.senderMobile" mode="international" />
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
      </div>
      <div class="second">
        <p class="heading-title">{{ $t('footer.other-ways') }}</p>
        <div v-if="footerSetting" id="phone-number-list-wrapper">
          <img src="~/assets/images/phonecall.png" alt="" class="icon">
          <ul id="phone-number-list">
            <li v-for="phone in footerSetting?.phones">
              <a :href="`tel:${phone}`">{{ phone }}</a>
            </li>
          </ul>
        </div>
        <div v-if="footerSetting" id="phone-number-list-wrapper">
          <ul id="phone-number-list" class="social-media-list">
            <li v-for="social in footerSetting?.socialMedia">
              <a :aria-label="social.name" :title="social.name" :href="social.link">
                <img v-if="social.icon" src="~/assets/images/phonecall.png" alt="" class="icon">
                <div class="icon-mimik">
                  <span>{{ social.name[0] }}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div v-if="footerSetting?.address" id="phone-number-list-wrapper">
          <p>
            <b>{{ $t('address') }} :</b>
            {{ footerSetting?.address }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const ctaLoading = ref(false)
const lang = useI18n().locale.value

const footerSetting = useState('default-setting').value?.footer
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
    ctaLoading.value = true
    await $fetch("/api/message", {
      method: "post",
      body: message.value
    }).then(res => {
      if (res) {
        alert(lang == "fa" ? "پیام شما با موفقیت ارسال شد" : "we received your message. :)")
      }
    }).catch(e => {
      alert(lang == "fa" ? "متاسفانه در ذخیره پیام شما به مشکل بر خوردیم. لطفا برای ارتباط با ما ، تماس بگیرید" : "Unfortunately, there was an error receiving your message. Please use the phone number to contact us. :(")

    })
    ctaLoading.value = false

  } else {
    alert(lang == "fa" ? "تمامی فیلد ها الزامی هستند" : "please fill all of inputs")

  }
}
</script>

<style scoped>
.heading-title {
  font-size: 32px;
  font-family: Kalameh-SemiBold;
  margin-bottom: 52px;
}

.top-space {
  height: 37vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.top-space::before {
  content: "";
  display: block;
  width: 200%;
  aspect-ratio: 1/1;
  background: var(--light-color);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  z-index: 0;
}

.bottom-space>#footer-logo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10vw;
  z-index: 100;
}

footer {
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background: var(--dark-color);
  color: #fff;
  position: relative;
  z-index: 101;
}

footer .bottom-space {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 11vw;
  padding: var(--padding-inline);
}

footer .bottom-space>* {
  width: calc(50% - 5vw);
}

footer form {
  display: flex;
  flex-flow: wrap;
  gap: calc(var(--gap) + 12px);
  column-gap: var(--gap);
}

footer form label {
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 50%;
  min-width: 40%;
}

footer form label span {
  position: absolute;
  top: 0;
  z-index: 10;
  background: var(--dark-color);
  transform: translate(0, -57%);
  font-size: 20px;
  padding-inline: 12px;
  margin-inline-start: 12px;
}

footer form label:last-of-type,
footer form>button {
  flex: 2;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 12px;
}

footer form label>textarea {
  height: 150px !important;
  resize: none;
}

footer form>button {
  margin-top: -12px;
  height: 64px;
  font-family: Kalameh-SemiBold;
  font-size: 24px;
}

footer .second {
  text-align: end;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

#phone-number-list-wrapper {
  display: flex;
  text-align: left;
  direction: ltr;
  align-items: start;
  gap: var(--gap);

}

#phone-number-list {
  list-style: none;
  padding: 0;
  max-width: 90%;
  display: flex;
  gap: var(--gap);
  margin: 0;
}

#phone-number-list a {
  color: var(--light-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 48px;
}

.social-media-list a {
  color: var(--dark-color) !important;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
}

.icon-mimik {
  width: 48px;
  height: 48px;
  background: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

@media (max-width: 980px) {
  footer>.bottom-space {
    flex-direction: column;
    padding-top: 15vw;
  }

  footer>.bottom-space>* {
    width: 100%;
  }

  footer .bottom-space .second {
    text-align: start;
  }

  .bottom-space>#footer-logo {
    width: 30vw;
  }

  footer form label {
    max-width: unset;
    min-width: 100%;
  }


}
</style>