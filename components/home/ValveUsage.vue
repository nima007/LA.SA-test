<template>
  <div class="valve-usage-section">
    <img id="valve-image" src="~/assets/images/valves/valveBack.png" alt />
    <section ref="section_1" :class="{'in-view-port': sec1Vis}">
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
    <section ref="section_2" :class="{'in-view-port': sec2Vis}">
      <div>
        <div>
          <p>سوپاپ یک طرفه گاز زادایی قهوه لا . سا کربن دی اکسید داخل بسته بندی قهوه رو خارج میکنه</p>
        </div>
        <div>
          <p>و مانع ورود هوا به بسته بندی و اکسیداسیون میشه</p>
        </div>
      </div>
    </section>
    <!-- <div style="position: fixed;top: 0;left: 0;color: #fff;">
      sec1 :{{ sec1Vis}}
      <br />
      sec2 :{{ sec2Vis}}
    </div> -->
  </div>
</template>
<script setup>
const section_1 = ref(null);
const section_2 = ref(null);
const sec1Vis = useElementVisibility(section_1, {
  rootMargin: "-50% 0px -100% 0px"
});
const sec2Vis = useElementVisibility(section_2, {
  rootMargin: "0px 0px -50% 0px"
});

const handleScroll = evt => {};
onMounted(() => {
  // section_1.value.style.opacity = sec1Vis ? 1 : 0;
  // section_2.value.style.opacity = sec2Vis ? 1 : 0;
});
</script>
<style scoped>
.valve-usage-section {
  width: 100vw;
  font-family: Kalameh-Medium;
  font-size: 24px;
  background: var(--dark-color);
  @media (max-width:980px) {
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
}
section {
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px;
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
section > div {
  width: calc(100% - 128px);
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
</style>

<!-- div > section:nth-last-child(1) {
  opacity: 0;
} -->












<!-- 
<template>
  <div class="valve-usage-section">
    <img id="valve-image" src="~/assets/images/valves/valveBack.png" alt />
    <section ref="section_1" :class="{'in-view-port': sec1Vis}">
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
    <section ref="section_2" :class="{'in-view-port': sec2Vis}">
      <div>
        <div>
          <p>سوپاپ یک طرفه گاز زادایی قهوه لا . سا کربن دی اکسید داخل بسته بندی قهوه رو خارج میکنه</p>
        </div>
        <div>
          <p>و مانع ورود هوا به بسته بندی و اکسیداسیون میشه</p>
        </div>
      </div>
    </section>
    <div style="position: fixed;top: 0;left: 0;">
      sec1 :{{ sec1Vis}}
      <br />
      sec2 :{{ sec2Vis}}
    </div>
  </div>
</template>
<script setup>
const section_1 = ref(null);
const section_2 = ref(null);
const sec1Vis = useElementVisibility(section_1,{
  rootMargin: '0px 0px -100% 0px'
});
const sec2Vis = useElementVisibility(section_2,{
  rootMargin: '0px 0px -100% 0px'
});

const handleScroll = evt => {};
onMounted(() => {
  // section_1.value.style.opacity = sec1Vis ? 1 : 0;
  // section_2.value.style.opacity = sec2Vis ? 1 : 0;
});
</script>
<style scoped>
.valve-usage-section {
  width: 100vw;
  position: relative;
  font-family: Kalameh-Medium;
  font-size: 24px;
  background: var(--dark-color);
}
#valve-image {
  position: fixed;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 216px;
}
section {
  height: 100vh;
  width: 100vw;
  color: #fff;
display: flex;
  align-items: center;
  justify-content: center; 
  padding: 64px;
  position: relative;
  transition: .5s;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20%);
}
section.in-view-port{
  opacity: 1;
  transform: translateY(0);
}
section > div {
  width: calc(100% - 128px);
  height: 50vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 345px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
section > div > div {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-block: 92px;
  width: calc(50% - 172px);
}
section > div > div:nth-child(2) {
  margin-top: auto;
  justify-content: start;
}
section > div > div h2 {
  font-size: 36px;
  font-family: Kalameh-SemiBold;
}
</style> -->

