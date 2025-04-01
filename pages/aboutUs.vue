<template>
  <main>
    <aside>
      <img src="~/assets/images/LASA_Logo_Flat.svg" alt="">
      <NuxtLinkLocale :to="{ name: 'contact_us' }" class="button">ارتباط با ما</NuxtLinkLocale>
    </aside>
    <article class="about-us-content">
      <h1 style="margin-top: 0; font-size: 32px;">{{ $t('aboutus.title') }}</h1>
  
      <p v-if="aboutuscontent" v-html="aboutuscontent">
      </p>
      <p v-else>
        {{ $t('messages.no-content') }}
      </p>
    </article>
  </main>
</template>

<script setup>
definePageMeta({
  name: "about_us",
  auth: false
})
const lang = useI18n().locale.value
const aboutuscontent = ref(null)
useFetch('/api/aboutuscontent',{method:'get',query:{'lang':lang}}).then(res=>{
  aboutuscontent.value= res.data.value
  console.log(res.data.value);
  
}).catch(e=>{
  aboutuscontent.value = null
})
</script>

<style scoped>
main {
  min-height: 100vh;
  padding: var(--padding-inline);
  padding-top: 30vh;
  width: calc(870px + var(--padding-inline)*2);
  max-width: 100%;
  margin: auto;
  display: flex;
  gap: 12%;
  @media (max-width:980px) {
    gap: 48px;
    flex-direction: column;
    align-items: center;
  }
}

aside {
  width: 30%;
  overflow: hidden;
  @media (max-width:980px) {
    width: 50%;
  }
}


aside img {
  max-width: 100%;
  margin-bottom: calc(var(--gap) * 2);
 
}

.about-us-content {
  flex: 1;
  font-size: 20px;
}
.about-us-content *{
  max-width: 100%;
}
.about-us-content > p{
  line-height: 42px;
  margin-top: -16px;
  @media (max-width:980px) {
  text-align: justify;;
  }
}
</style>