<template>
  <div id="main-valve-usage" ref="MAIN_WARPPER_SECTION">
    <img id="float-valve-image" :class="{ 'in-viewport': VMWS, 'valve-on-pack': VS3 || VS4, 'valve-on-pack-hide': VS4 }"
      ref="FLOAT_VALVE_IMAGE" src="~/assets/images/valves/valveFront.png" alt />
    <section id="section-1" ref="SECTION_1" :class="{ 'in-viewport': VS1 }">
      <div class="section-content-wrapper opacity-base">
        <div class="content-start-side translate-base">
          <h1> چرا سوپاپ بسته‌بندی یورو والو ؟</h1>
          <p>
           یکی از مشکلات بسته‌بندی در صنایع غذایی  بالاخص صنعت قهوه تساعدگاز‌هایی مانند دی اکسیر کربن از مواد عذایی بود که باعث تورم ،پارگی و انفجار بسته‌بندی می شد . 
           خوشبختانه این مشکل از سال ۱۹۸۰ حل شده و راه حل داره .
          </p>
        </div>
        <div class="content-end-side translate-base">
          <!-- <h1>hell</h1> -->
          <p>
             همان‌طور که گفتیم علت باد کردن و تورم بسته بندی قهوه،
              تساعد گاز دی اکسید کربن از دانه‌های قهوه بعد از عملیات برشته کاری است .  برای خارج کردن این گاز
             و جلوگیری از ورود اکسیژن به بسته‌بندی می توانید از سوپاپ یورو والو استفاده کنید .
          </p>
        </div>
      </div>
    </section>
    <section id="section-2" ref="SECTION_2" :class="{ 'in-viewport': VS2 }">
      <div class="section-content-wrapper opacity-base">
        <div class="content-start-side translate-base">
          <!-- <h1>GoodBye word</h1> -->
          <p>
            سوپاپ‌های یورو والو از مواد مقاوم دربرابر فشار ساخته می‌شوند که به محض افزایش فشار ،گاز را از بسته‌بندی خارج می‌کند و با به تعادل رسیدن فشار ، دریجه بسته می‌شود و مانع از ورود اکسیژن و آلودگی به داخل بسته‌بندی می شود . 
          </p>
        </div>
        <div class="content-end-side translate-base">
          <!-- <h1>GoodBye word</h1> -->
          <p>
            این سوپاپ هم  از آسیب دیدن بسته بندی جلوگیری می‌کنه که باعث حمل و نقل مطمعن بار قهوه می‌شه و هم مانع از اکسیداسیون ، افت کیفیت و تغییر طعم قهوه می شه .
          </p>
        </div>
      </div>
    </section>
    <section id="section-3" ref="SECTION_3" :class="{ 'in-viewport': VS3 }">
      <div class="section-content-wrapper opacity-base down-to-up-translate-base full-width-height">
        <img src="~/assets/images/coffeePacketGoldRozeNoBackground.png" alt />
      </div>
    </section>
    <section id="section-4" ref="SECTION_4" class="high-index" :class="{ 'in-viewport': VS4 }">
      <div class="section-content-wrapper opacity-base full-width-height high-index no-transition-in">
        <img src="~/assets/images/coffeePacketGoldRozeWithBackgroundHasValve.png" alt />
      </div>
      <div class="section-overlay-conent-wrapper translate-base">
        <div class="content-box">
          <h3 class="title">{{ $t('home.benefits.packaging.title') }} :</h3>
          <p class="text">
            {{ $t('home.benefits.packaging.text') }}
          </p>
        </div>
        <div class="content-box">
          <h3 class="title">{{ $t('home.benefits.quality.title') }} :</h3>
          <p class="text">
            {{ $t('home.benefits.quality.text') }}
          </p>
        </div>
        <div class="content-box">
          <h3 class="title">{{ $t('home.benefits.foodgrade.title') }} :</h3>
          <p class="text">
            {{ $t('home.benefits.foodgrade.text') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const SECTION_1 = ref();
const SECTION_2 = ref();
const SECTION_3 = ref();
const SECTION_4 = ref();

const MAIN_WARPPER_SECTION = ref();
const FLOAT_VALVE_IMAGE = ref();

const VMWS = useElementVisibility(MAIN_WARPPER_SECTION, { rootMargin: "-100px 0px -50% 0px" });
const VS1 = useElementVisibility(SECTION_1, { rootMargin: "-50% 0px -50% 0px" });
const VS2 = useElementVisibility(SECTION_2, { rootMargin: "-50% 0px -50% 0px" });
const VS3 = useElementVisibility(SECTION_3, { rootMargin: "-50% 0px -50% 0px" });
const VS4 = useElementVisibility(SECTION_4, { rootMargin: "0% 0px -50% 0px" });
onMounted(() => {
  const { y: verticalScrollPosition } = useScroll(document);
  const mainWrapperSectionHeight = MAIN_WARPPER_SECTION.value.clientHeight / 150;
  watch(verticalScrollPosition, () => {
    FLOAT_VALVE_IMAGE.value.style.rotate = `${verticalScrollPosition.value / mainWrapperSectionHeight}deg`
  })
})


</script>

<style scoped>
#main-valve-usage {
  width: 100%;
  background: var(--dark-color);
  overflow: hidden;
  padding-top: 1px;
}

#float-valve-image {
  position: fixed;
  top: 50vh;
  left: 50%;
  translate: -50% -50%;
  width: var(--valve-size);
  z-index: 10;
  scale: 0;
  transition: scale 1s, width 1s, translate 1s;
  transform-origin: center center;
  transform-box: fill-box;

  @media (max-width:980px) {
    width: 30vw;
    top: 30vh;
  }
}

#float-valve-image.in-viewport {
  scale: 1;
}

#float-valve-image.in-viewport.valve-on-pack {
  translate: -50% -80%;
  width: 8vh;

  @media (max-width:980px) {
    top: 50vh;
  }
}

#float-valve-image.in-viewport.valve-on-pack-hide {
  opacity: 0 !important;
  transition: scale .3s, width .3s, opacity .3s !important;
}


#status-holder {
  background: red;
  position: fixed;
  top: 50%;
  left: 0;
  width: 150px;
  translate: 0 -50%;
}

#main-valve-usage>section {
  width: 100%;
  min-height: 100vh;
  color: #fff;
}



.section-content-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  padding: var(--menu-height);
}

.section-content-wrapper.full-width-height {
  height: 100vh;
  width: 100vw;
  display: inline-block;
  /* transform: translate(-50%, -10%); */
}

.high-index {
  z-index: 2;
}

.full-width-height img {
  width: auto;
  min-width: 100%;
  height: 100%;
  max-width: unset;
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 0;

  @media (max-width:980px) {
    bottom: -50%;
    translate: -50% -50%;
  }
}

.section-content-wrapper.opacity-base {
  opacity: 0;
  transition: 1s;
}

.in-viewport .section-content-wrapper.opacity-base {
  opacity: 1;
}

.section-content-wrapper>.translate-base {
  transition: 1s;
}

.section-content-wrapper.down-to-up-translate-base {
  translate: -50% 10%;
  transition: 1s;
}

.in-viewport .section-content-wrapper.down-to-up-translate-base {
  translate: -50% -50%;

}

.section-content-wrapper.no-transition-in {
  transition: unset !important;
}

.section-content-wrapper.full-width {
  width: 100%;
  min-height: 100vh;
}

#section-4 .section-overlay-conent-wrapper {
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 48px;
  padding: 5vw;

  /* padding: 200px; */
  /* padding-bottom: 20vh; */
  @media (min-width:980px) {
    column-gap: 50vh;
  }
}

#section-4 .section-overlay-conent-wrapper>.content-box {
  width: 300px;
  background: #d9d9d977;
  color: #fff;
  height: fit-content;
  padding: 24px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}


#section-4 .section-overlay-conent-wrapper>.content-box>* {
  margin: 0;
}

#section-4 .section-overlay-conent-wrapper>.content-box .title {
  font-size: Kalameh-SemiBold;
  font-size: 24px;
}

#section-4 .section-overlay-conent-wrapper>.content-box .text {
  font-family: Kalameh-Regular;
  font-size: 20px;
}

@media (min-width: 980px) {

  .section-content-wrapper .content-start-side,
  .section-content-wrapper .content-end-side {
    width: calc(50% - (var(--valve-size) / 2 + var(--gap) * 2));
  }

  .section-content-wrapper .content-end-side {
    margin-inline-start: auto;
  }

  .section-content-wrapper>.translate-base {
    translate: 0 100%;
  }

  .in-viewport .section-content-wrapper>.translate-base {
    translate: 0 0%;
  }

  #section-4 .section-overlay-conent-wrapper .content-box:nth-child(even) {
    margin-top: 256px;
  }
}

@media (max-width: 980px) {

  /* 
  .section-content-wrapper .content-start-side,
  .section-content-wrapper .content-end-side {
    width: calc(50% - var(--valve-size));
  }

  .section-content-wrapper .content-end-side {
    margin-inline-start: auto;
  }
*/
  .section-content-wrapper>.content-start-side.translate-base {
    translate: 100% 0;
  }

  .section-content-wrapper>.content-end-side.translate-base {
    translate: -100% 0;
  }

  .in-viewport .section-content-wrapper>.translate-base {
    translate: 0 0;
  }

  #section-4 .section-overlay-conent-wrapper {
    flex-direction: column;
    align-items: center;
  }

  #float-valve-image {
    z-index: 3;
  }

  #section-1 .section-content-wrapper,
  #section-2 .section-content-wrapper {
    background: #0F182033;
    z-index: 3;
    bottom: 0;
    top: unset;
    translate: -50% 0%;
    height: fit-content;
  }
}
</style>