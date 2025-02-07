<template>
  <div class="valve-usage-section" ref="valve_usage_section">
    <img
      id="valve-image"
      ref="valve_image"
      :class="{ 'on-pack': sec3Vis, 'hide-opacity-and-size': !valveSec1Vis || sec4Vis }"
      src="~/assets/images/valves/valveBack.png"
      alt
    />
    <section ref="section_1" :class="{ 'in-view-port': sec1Vis }">
      <div>
        <div>
          <h2>چرا به سوپاپ قهوه لاسا نیاز داری؟</h2>
          <p>قهوه بعد از فرایند رست به صورت طبیعی کربن دی اکسید(co2) آزاد می کند .</p>
        </div>
        <div>
          <p>که هم به بسته بندی قهوه آسیب میزنه و هم به خود قهوه رست شدتون</p>
        </div>
      </div>
    </section>
    <section ref="section_2" :class="{ 'in-view-port': sec2Vis }">
      <div>
        <div>
          <p>سوپاپ یک طرفه گاز زادایی قهوه لا . سا کربن دی اکسید داخل بسته بندی قهوه رو خارج میکنه</p>
        </div>
        <div>
          <p>و مانع ورود هوا به بسته بندی و اکسیداسیون میشه</p>
        </div>
      </div>
    </section>
    <section ref="section_3" :class="{ 'in-view-port': sec3Vis, 'no-transition': sec4Vis }">
      <div class="full-height-width">
        <img src="~/assets/images/coffeePacketGoldRozeNoBackground.png" alt />
      </div>
    </section>
    <section id="section-image-brif" ref="section_4" :class="{ 'in-view-port': sec4Vis }">
      <div class="full-height-width no-translate">
        <img src="~/assets/images/coffeePacketGoldRozeWithBackground.png" alt />
      </div>
      <div class="image-section-text-content">
        <div class="content-box">
          <h3 class="title">جلوگیری از انفجار بسته بندی :</h3>
          <p class="text">
            با خارج کردن گاز های داخل بسته بندی مانند CO2 مانع انفجار و ترکیندن بسته بندی از فشار داخل می
            شود
          </p>
        </div>
        <div class="content-box">
          <h3 class="title">خروج کنترل شده گاز :</h3>
          <p class="text">
            گاز از سوراخ کوچکی که در جلوی سوپاپ وجود دارد خارج می شود که مانع از تخلیه سریع و دفرمه شدن
            بسته بندی محصول می شود .
          </p>
        </div>
        <div class="content-box">
          <h3 class="title">جلوگیری از انفجار بسته بندی :</h3>
          <p class="text">
            با خارج کردن گاز های داخل بسته بندی مانند CO2 مانع انفجار و ترکیندن بسته بندی از فشار داخل می
            شود
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const section_1 = ref(null);
const section_2 = ref(null);
const section_3 = ref(null);
const section_4 = ref(null);
const valve_image = ref(null);

const valve_usage_section = ref(null);
const Nima = useTemplateRef("Nima");
const { y, x, isScrolling, arrivedState, directions } = useScroll(document);

const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(
  directions
);

// const displayX = computed({
//   get() {
//     return x.value.toFixed(1)
//   },
//   set(val) {
//     x.value = Number.parseFloat(val)
//   },
// })
// const displayY = computed({
//   get() {
//     return y.value.toFixed(1)
//   },
//   set(val) {
//     y.value = Number.parseFloat(val)
//   },})

const valveSec1Vis = useElementVisibility(valve_usage_section, {
  rootMargin: "-50% 0px -100% 0px"
});
const sec1Vis = useElementVisibility(section_1, {
  rootMargin: "-50% 0px -100% 0px"
});
const sec2Vis = useElementVisibility(section_2, {
  rootMargin: "-50% 0px -50% 0px"
});
const sec3Vis = useElementVisibility(section_3, {
  rootMargin: "-50% 0px -50% 0px"
});
const sec4Vis = useElementVisibility(section_4, {
  rootMargin: "-50% 0px -50% 0px"
});
onMounted(() => {
  console.log("valve image ", valve_image.value);
  const h = valve_usage_section.value.clientHeight/200
  watch(y, () => {
  
    
    if(valveSec1Vis)
    valve_image.value.style.transform = `translate(-50%, -50%) rotate(${y.value/h}deg)`;
  });
});
</script>
<style scoped>
#Nima {
  height: 50vh;
  width: 100vw;
  overflow: auto;
  background: red;
  position: fixed;
  z-index: 190;
  top: 0;
}
#Nima > div {
  height: 100vh;
  width: 100%;
}
.hide-opacity-and-size {
  opacity: 0;
  width: 0 !important;
  height: 0 !important;
}

.no-transition {
  transition: unset !important;
}

.valve-usage-section {
  width: 100vw;
  font-family: Kalameh-Medium;
  font-size: 24px;
  background: var(--dark-color);
  z-index: 90;

  @media (max-width: 980px) {
    font-size: 16px;
  }
}

#valve-image {
  position: fixed;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 216px;
  z-index: 100;
  transition: 1s;
}

#valve-image.on-pack {
  transform: translate(-50%, -80%);
  width: 8vh;
}

section {
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-inline);
  position: relative;
  transition: 0.5s;
  opacity: 0;
  overflow: hidden;
}

section.in-view-port {
  opacity: 1;
}

section.in-view-port > div {
  transform: translate(-50%, -50%);
}

section > div.no-translate {
  transform: translate(-50%, -50%) !important;
}

section > div {
  width: calc(100% - var(--padding-inline) * 2);
  height: 50vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 345px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  transition: 0.5s;
}

section > div > div {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-block: 92px;
  width: calc(50% - 172px);
}

.full-height-width {
  height: 100vh;
  width: 100vw;
  display: inline-block;
  transform: translate(-50%, -10%);
}

.full-height-width img {
  width: auto;
  min-width: 100%;
  height: 100%;
  max-width: unset;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
}

section > div > div:nth-child(2) {
  margin-top: auto;
  justify-content: start;
}

section > div > div h2 {
  font-size: 36px;
  font-family: Kalameh-SemiBold;

  @media (max-width: 980px) {
    font-size: 24px;
  }
}

#section-image-brif {
  min-height: 100vh;
  height: fit-content;
  border: 2px solid red;
}

.full-height-width.no-translate {
}

.image-section-text-content {
  position: relative;
  column-gap: 20vw;
  row-gap: 48px;
  column-gap: 65vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  margin: auto;
  width: calc(65vh + 600px);
  height: fit-content !important;
  top: unset !important;
  left: unset !important;
  transform: unset !important;
}

.image-section-text-content > .content-box {
  width: 300px;
  background: #d9d9d977;
  color: #fff;
  height: fit-content;
  padding: 24px 24px 48px 24px;
  display: flex;
  gap: 12px;
}

.image-section-text-content > .content-box:nth-child(even) {
  margin-top: 256px;
}

.image-section-text-content > .content-box > * {
  margin: 0;
}

.image-section-text-content > .content-box .title {
  font-size: Kalameh-SemiBold;
  font-size: 24px;
}

.image-section-text-content > .content-box .text {
  font-family: Kalameh-Regular;
  font-size: 20px;
}

@media (max-width: 980px) {
  #valve-image {
    width: 30vw;
    top: 30vh;
  }

  #valve-image.on-pack {
    top: 50vh;
  }

  section > div {
    gap: 0;
    flex-direction: column;
    height: fit-content;
    max-height: 60vh;
    transform: translateY(0) translateX(-50%) !important;
    transition: 1s !important;
  }

  section > div:not(.full-height-width) {
    top: calc(30vh + 30vw);
  }

  section > div:not(.full-height-width) > * {
    transition: 1s;
    transform: translateY(0) translateX(50%) !important;
  }

  section > div:not(.full-height-width) > :nth-child(even) {
    transform: translateY(0) translateX(-50%) !important;
  }

  section.in-view-port > div:not(.full-height-width) > * {
    transform: translateY(0) translateX(0) !important;
  }

  section > div.full-height-width {
    max-height: 100vh;
  }

  section > div.full-height-width:not(.no-translate) {
    transform: translateY(0) translateX(-50%) !important;
  }

  section.in-view-port > div.full-height-width {
    transform: translateY(-50%) translateX(-50%) !important;
  }

  section > div > div {
    width: 100%;
    padding: 0;
  }

  section > div > div * {
    text-align: center !important;
  }

  .image-section-text-content {
    max-height: unset;
  }

  .image-section-text-content > .content-box {
    max-width: 100%;
  }

  .image-section-text-content > .content-box:nth-child(even) {
    margin-top: 0;
  }
}
</style>
