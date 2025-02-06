<template>
  <header :class="{'open-menu':menuStatus}">
    <section class="first-side-menu-container">
      <button
        id="menu-button"
        aria-label="open and close menu button"
        @click="menuStatus=!menuStatus"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div id="lASA-LOGO">
        <img src="~/assets/images/LASA_Logo.png" alt />
      </div>
      <div id="nav-container">
        <nav>
          <ul>
            <li>
              <NuxtLinkLocale :to="{name:'homePage'}">{{$t('menu.home')}}</NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale>{{$t('menu.products')}}</NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale :to="{name:'about_us'}">{{$t('menu.about')}}</NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale>{{$t('menu.blog')}}</NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale>{{$t('menu.contact')}}</NuxtLinkLocale>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="second-side-container" :class="{'ltr-line':i18nHead.htmlAttrs.dir=='ltr'}">
      <button>
        <span>{{$t('menu.downloads')}}</span>
      </button>
      <button
        class="no-button-appearance"
        id="change-lang"
        aria-label="change language - تغییر زبان"
        @click="showLangMenu=!showLangMenu"
      >
        <span>{{i18nHead.htmlAttrs.lang.split("-").at(0)}}</span>
        <img src="~/assets/images/lang.svg" />
      </button>
      <div v-if="showLangMenu" id="popup-lang-list">
        <ul>
          <li v-for="lang in availableLocales" :key="lang.code">
            <NuxtLink :to="switchLocalePath(lang.code)">{{lang.name}}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script setup>
import { NuxtLinkLocale } from "#components";
import { useRoute } from "vue-router";
const route = useRoute();
const i18nHead = useLocaleHead();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
const menuStatus = ref(false);
const showLangMenu = ref(false);
watch([route, i18nHead], () => {
  showLangMenu.value = false;
  menuStatus.value = false;
});
</script>

<style scoped>
#popup-lang-list {
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 50%;
  transform: translateY(100%);
  width: 100%;
  height: fit-content;
  max-height: 50vh;
  overflow-y: auto;
  background: var(--dark-color);
  padding-inline: var(--gap);
  padding-block: var(--gap);
  padding-top: calc(var(--menu-height) / 1.5);
  border-radius: calc(var(--menu-height) / 2);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
  direction: ltr;
}
#popup-lang-list:dir(ltr) {
  direction: rtl;
}
#popup-lang-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#popup-lang-list a {
  color: var(--light-color-green);
}
header {
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  height: var(--menu-height);
  display: flex;
  gap: 4px;
  width: max-content;
  z-index: 102;
}
a{
  text-decoration: none;

}
header > section {
  background-color: var(--dark-color);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 50px;
  width: fit-content;
  min-width: fit-content;
  overflow: hidden;
  padding: 8px;
}

.second-side-container {
  position: relative;
  overflow: visible !important;
  padding-inline: 18px;
}

.second-side-container::before {
  content: "";
  width: 24px;
  height: 4px;
  display: inline-block;
  background-color: #ffdd55;
  position: absolute;
  right: 0;
  transform: translateX(65%);
  border-radius: 4px;
}
.second-side-container.ltr-line::before {
  right: unset !important;
  left: 0 !important;
  transform: translateX(-65%);
}
#nav-container {
  padding-inline-end: 84px;
  height: 100%;
}

#lASA-LOGO,
#lASA-LOGO > img {
  height: 100%;
}

nav,
nav > ul,
nav > ul li,
nav ul li a {
  height: 100%;
  font-family: Kalameh-Medium;
  font-size: 18px;
}

nav > ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
}

nav > ul a {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 12px;
  padding-top: 5px;
}
nav > ul a.router-link-active {
  color: var(--light-color-green);
}
#change-lang {
  background: none;
  color: var(--light-color);
  gap: 8px;
  @media (min-width: 980px) {
    padding-inline-start: 24px;
  }
}
#menu-button {
  width: 56px;
  height: 48px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  flex-shrink: 2;
  background: transparent;

  @media (min-width: 980px) {
    display: none;
  }
}

@media (max-width: 980px) {
  header {
    width: calc(100% - 48px);
  }
  button {
    padding-inline: 14px !important;
    height: 100%;
    font-size: 16px;
  }
  #change-lang {
    font-size: 12px;
  }
  #change-lang > img {
    width: 24px;
  }
  .first-side-menu-container {
    gap: 0px;
    flex: 1;
    justify-content: space-between;
  }
  #nav-container {
    width: 64px;
    height: 64px;
    overflow: hidden;
    position: fixed;
    padding: 24px;
    z-index: -1;
    transition: 0.5s ease-in-out;
    top: 0px;
    right: 8px;
    border-radius: 50%;
    background: var(--dark-color);
  }
  #nav-container::before {
    position: fixed;
    top: 0;
    right: 0;
    content: "";
    background: var(--dark-color);
    height: 100%;
    aspect-ratio: 1/1;
    display: inline-block;
    border-radius: 50%;
    z-index: -1;
    transform: translate(0%, -0%);
    transition: 0.5s;
    transform-origin: center;
    transform-box: fill-box;
  }
  header.open-menu #nav-container::before {
    height: calc(100vh * 3);
    transform: translate(50%, -50%);
  }

  header.open-menu #nav-container {
    top: calc(var(--menu-top-position) * -1);
    right: calc(var(--menu-right-postion) * -1);
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  #nav-container > nav {
    display: none;
    margin-top: 128px;
  }
  header.open-menu #nav-container nav {
    display: block !important;
  }
  #nav-container > nav > ul {
    flex-direction: column;
  }
  nav > ul li {
    height: 78px;
  }
  nav > ul li > a {
    justify-content: start;
    font-size: 24px;
    font-family: Kalameh-SemiBold;
    border-bottom: 1px solid #fff;
    padding-inline: 0;
  }
  nav > ul a.router-link-active {
    border-bottom-color: var(--light-color-green);
    gap: 16px;
  }
  nav > ul a.router-link-active::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--light-color-green);
  }
  .second-side-container {
    padding-inline: 12px 0;
    padding-block: 12px !important;
    gap: 0;
    justify-content: space-between;
  }
  .second-side-container::before {
    width: 14px;
  }
  #menu-button > div {
    width: 100%;
    height: 3px;
    background: #d9d9d9;
    border-radius: 3px;
  }
  #menu-button > div:nth-child(2) {
    width: 95%;
  }
}
</style>

<!--  -->