<template>
  <div class="valve-usage-section">
    <img id="valve-image" src="~/assets/images/valves/valveBack.png" alt />
    <section ref="section_1">
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
    <section ref="section_2">
      <div>
        <div>
          <p>سوپاپ یک طرفه گاز زادایی قهوه لا . سا کربن دی اکسید داخل بسته بندی قهوه رو خارج میکنه</p>
        </div>
        <div>
          <p>و مانع ورود هوا به بسته بندی و اکسیداسیون میشه</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const section_1 = templateRef("section_1");
const section_2 = templateRef("section_2");

const handleScroll = evt => {
  const scrollY = window.scrollY + window.scrollY ;
  // decreases as user scrolls
  section_1.value.style.opacity =
    (100 - (scrollY/2 + window.innerHeight  - section_1.value.offsetHeight)) / 1000;
  // increases as user scrolls
  section_2.value.style.opacity =
    (scrollY + window.innerHeight - section_2.value.offsetTop) / 1000;

  //   const maxBackgroundSize = 120
  //   const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

  //   // zoom the background at a slower rate
  //   background.value.style.transform =
  //     'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
  //   foreground.value.style.transform =
  //     'scale(' + (100 + backgroundSize) / 100 + ')'
};
onMounted(()=>{
document.addEventListener("scroll", handleScroll);

})
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

div > section:nth-last-child(1) {
  opacity: 0;
}
</style>

