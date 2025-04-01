<template>
  <main>
    <section id="hero-section">
      <img class="coffee-bag" src="~/assets/images/coffeePacketGoldRozeFit.png" alt />
      <div class="container">
        <h1 class="side-text">{{$t('hero.title')}}</h1>
        <img class="valve-image" src="~/assets/images/valves/valveBack.png" alt />
        <h1 class="side-text">{{$t('hero.description')}}</h1>
      </div>
      <div id="wave">
        <img src="~/assets/images/circlecrop.svg" alt="">
      </div>
    </section>
    <home-ValveUsage  style="pointer-events: none;" />
    <section></section>
  </main>
</template>
<script setup>
definePageMeta({
  name: "homePage",
  auth:false
});
</script>
<style scoped>
main{
  height: fit-content;
  overflow: hidden;
}
main > *{
  z-index: 90;
}
.valve-usage-section{
  z-index: 89;
}
#hero-section {
  position: relative;
  background-color: var(--light-color);
}
#hero-section .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: -5vh;
  gap: 3vw;
}
#hero-section .container .side-text {
  font-family: Kalameh-Semibold;
  font-size: 48px;
  flex: 1;
}
#hero-section .container .side-text:nth-child(1) {
  text-align: end;
}
#hero-section .valve-image {
  margin-top: 30vh;
  width: 15vh;
  filter: drop-shadow(0 10vh 4px #0004);
}
#hero-section .coffee-bag {
  position: absolute;
  z-index: -1;
  max-width: 30vw;
  max-height: 100vh;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 60%);
}
#hero-section #wave {
  width: 100%;
  height: 28vh;
  /* background: radial-gradient(
    ellipse farthest-side at center -17%,
    transparent 101%,
    var(--dark-color) 101%
  ); */
  position: absolute;
  bottom: 0;
  left: 0;
}
#hero-section #wave img{
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 100%; */
}
main {
}
section {
  height: 100vh;
  overflow: hidden;
}
@media (max-width: 980px) {
  #hero-section {
    height: 100dvb;
    transition: .3s;
  }
  #hero-section .container {
    flex-direction: column;
    justify-content: start;
    margin: 0;
    padding-top: calc(var(--menu-height) * 2);
  }
  #hero-section .container > * {
    order: 3;
    flex: 0 !important;
  }
  #hero-section .container .side-text {
    width: 100%;
  }
  #hero-section .container .valve-image {
    margin-top: 45px;
  }
  #hero-section .container .side-text:nth-of-type(1) {
    font-size: 32px;
    order: 1 !important;
    text-align: start !important;
  }
  #hero-section .container .side-text:nth-of-type(2) {
    order: 2 !important;
    text-align: end;
    margin: 0;
  }
#hero-section #wave {
  height: 15vh;
}
#hero-section .coffee-bag {
  max-width: calc(100vw - var(--padding-inline) * 3);
}
}
</style>
  <!-- background-image: radial-gradient(ellipse at 50% -120%, transparent 81%, var(--dark-color) 100%); -->

<!-- var(--light-color); -->

<!-- radial-gradient(ellipse farthest-side at center -17%, transparent 0%, transparent 101%, rgba(15, 24, 32, 1) 101%); -->