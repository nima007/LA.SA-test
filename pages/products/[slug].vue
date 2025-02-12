<template>
  <main itemscope itemtype="https://schema.org/Product">
    <section id="product-data-container" class="no-padding">
      <h1 itemprop="name">سوپاپ گاز زدایی فیلتر دار</h1>
      <p itemprop="description">
        شیر گاز زدایی یک طرفه LA.SA برای آزادسازی دی اکسید کربن (CO2) طراحی شده است که به طور طبیعی
        در طول فرآیند برشته کردن دانه های قهوه رخ می دهد. دریچه های گاز زدایی یک طرفه کار می کنند
        یکپارچگی و عملکرد ثابت را برای یک دوره دو ساله تضمین می کند. شکل و
        اندازه دریچه طوری طراحی شده است که اطمینان حاصل شود که بسته بندی قهوه خیلی سریع منبسط نمی شود.
      </p>
      <P>برای استعلام قیمت و سفارش با ما در ارتباط باشید</P>
      <div id="product-call-to-action-list">
        <button>
          <span>ارتباط با ما</span>
        </button>
        <button class="btn-secondary">
            
          <span>دانلود کاتالوگ</span>
        </button>
      </div>
      <img class="spliter no-padding" src="~/assets/images/gas-spliter.svg" alt="">
    </section>
    <section id="product-images-container">
      <ul>
        <li>
          <img itemprop="image" src alt />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: "product_page"
});
</script>

<style scoped>
main {
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  height: 100vh;
  overflow: auto;
}
main > * {
  width: 50%;
}
.spliter{
    width: 100%;
}
#product-images-container {
  background-color: var(--dark-color);
  overflow: auto;
  height: 100vh;
  position: sticky;
  top: 0;
}
#product-data-container {
  padding-top: calc(var(--menu-height) * 1.8);
  height: 300vh;
}
#product-data-container > *:not(.no-padding) {
    padding-inline: var(--padding-inline);
}
#product-call-to-action-list {
  display: flex;
  gap: calc(var(--gap) / 2);
}
button:not(.btn-secondary),.button:not(.btn-secondary){
    border: 2px solid var(--dark-color);
}
</style>