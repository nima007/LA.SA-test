<template>
  <footer>
    <div class="top-space"></div>
    <div class="bottom-space">
      <img id="footer-logo" src="~/assets/images/LASA_Logo.png" alt />

      <div class="first">
        <p class="heading-title">{{$t('footer.contact-us')}}</p>
        <form @submit.prevent>
          <label for>
            <span>{{$t('footer.name')}}</span>
            <input type="text" />
          </label>
          <label for>
            <span>{{$t('footer.company')}}</span>
            <input type="text" />
          </label>
          <label for>
            <span>{{$t('footer.phone')}}</span>
            <vue-tel-input v-model="mobileNumber" mode="international" />
          </label>
          <label for>
            <span>{{$t('footer.email')}}</span>
            <input type="email" />
          </label>
          <label for>
            <span>{{$t('footer.message')}}</span>
            <textarea></textarea>
          </label>
          <button>
            <span>{{$t('footer.send')}}</span>
          </button>
        </form>
      </div>
      <div class="second">
        <p class="heading-title">{{$t('footer.other-ways')}}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const mobileNumber = ref();
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
.bottom-space > #footer-logo {
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
footer .bottom-space > * {
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
footer form > button {
  flex: 2;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 12px;
}
footer form label > textarea {
  height: 150px !important;
  resize: none;
}
footer form > button {
  margin-top: -12px;
  height: 64px;
  font-family: Kalameh-SemiBold;
  font-size: 24px;
}
footer .second {
  text-align: end;
}
@media (max-width: 980px) {
  footer > .bottom-space {
    flex-direction: column;
    padding-top: 15vw;
  }
  footer > .bottom-space > * {
    width: 100%;
  }
  footer .bottom-space .second {
    text-align: start;
  }
  .bottom-space > #footer-logo {
    width: 30vw;
  }
  footer form label {
    max-width: unset;
    min-width: 100%;
  }
}
</style>