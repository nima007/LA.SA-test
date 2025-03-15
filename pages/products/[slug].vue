<template>
  <main v-if="data" itemscope itemtype="https://schema.org/Product">
    <section id="product-data-container" class="no-padding">
      <h1 itemprop="name" class="product-name">{{ data.name }} </h1>
      <p itemprop="description" class="product-description">
        {{ data.description }}
      </p>
      <section id="action-holder">
        <p class="attention" style="margin-bottom: var(--gap);">
          {{ $t('product-page.attention-to-call') }}
        </p>
        <div id="product-call-to-action-list">
          <NuxtLinkLocale :to="{name:'contact_us'}" class="button">
            <span>{{ $t('menu.contact') }}</span>
          </NuxtLinkLocale>
          <a v-if="data.catalogue" :href="data.catalogue" download class="button btn-secondary">
            <span>{{ $t('product-item.button-catalogue') }}</span>
          </a>
        </div>
      </section>
      <img class="spliter no-padding" src="~/assets/images/gas-spliter.svg" alt />
      <section>
        <span class="section-title">مشخصات</span>
        <table>
          <thead>
            <tr>
              <th>{{$t('product-page.attr-table.title')}}</th>
              <th>{{$t('product-page.attr-table.unit')}}</th>
              <th>{{$t('product-page.attr-table.value')}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="attribute in data.attributes" :key="attribute.name">
              <td>{{ attribute.name }} </td>
              <td>{{ attribute.unit }}</td>
              <td>{{attribute.value}}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <section id="product-images-container" class="no-padding">
      <ul>
        <li v-for="image in data.images">
          <img itemprop="image" :src="image" alt />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { NuxtLinkLocale } from '#components';

definePageMeta({
  name: "product_page",
  auth:false
});
const route = useRoute();
const productSlug = ref(route.params.slug);
const { data } = await useFetch(`/api/products/${productSlug.value}`, { query: { lang: useI18n().locale.value } });
if (data) {
  console.log("data", data);
}
</script>

<style scoped>
main {
  width: 100%;
  height: fit-content;
  display: flex;
  font-size: 20px;
}

main * {
  margin: 0;
}

@media (min-width: 980px) {
  main>* {
    width: 50vw;
  }
}

.spliter {
  width: 100%;
  margin-block: 50px 10px;
}

#product-images-container {
  background-color: var(--dark-color);
  overflow: auto;
  height: 100vh;

  @media (min-width: 980px) {
    position: fixed;
    margin-inline-start: 50vw;
    top: 0;
  }
}

#product-images-container>ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  list-style: none;
}

#product-images-container>ul>li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-height: 50%;
}

#product-images-container>ul>li>img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
}

#product-data-container {
  padding-top: calc(var(--menu-height) * 1.8);
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: var(--gap);
  padding-bottom: calc(var(--menu-height) * 3);
}

#product-data-container>*:not(.no-padding) {
  padding-inline: var(--padding-inline);
}

#product-call-to-action-list {
  display: flex;
  gap: calc(var(--gap) / 2);
}

button:not(.btn-secondary),
.button:not(.btn-secondary) {
  border: 2px solid var(--dark-color);
}

.product-name {
  font-size: 48px;
  margin-block: 24px;
}

.product-description {
  margin-block: 0 24px;
}

.section-title {
  font-family: Kalameh-SemiBold;
  font-size: 32px;
  text-align: center;
  width: 100%;
  display: inline-block;
}

@media (max-width: 980px) {
  main {
    flex-direction: column;
    padding-bottom: 20vh;
    font-size: 16px;
  }

  #product-data-container .product-name~* {
    order: 3;
  }

  #action-holder {
    order: 2 !important;
  }

  #product-call-to-action-list {
    flex-direction: column;
  }

  #product-images-container {
    height: 50vh !important;
    flex: unset !important;
    min-height: 400px;
    padding-top: calc(var(--menu-height) * 1.5);
    order: 1;
    border-bottom-right-radius: 40%;
    border-bottom-left-radius: 40%;
    border-bottom: 4px solid #ffdd55;
  }

  #product-data-container {
    order: 2;
    padding-top: var(--gap);
  }

  #product-images-container>ul {
    flex-direction: row;
    overflow-x: auto;
    align-items: center;
    padding-inline: 20vw;
  }

  #product-images-container>ul li {
    width: fit-content;
    min-width: 50vw;
    max-width: 90vw;
    height: 100%;
    max-height: unset;
  }

  .product-name {
    font-size: 32px;
    margin-bottom: 0;
  }

  .product-description {
    margin-top: var(--gap);
  }
}
</style>