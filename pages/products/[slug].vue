<template>
  <main itemscope itemtype="https://schema.org/Product">
    <section id="product-data-container" class="no-padding">
      <h1 itemprop="name" class="product-name">سوپاپ گاز زدایی فیلتر دار</h1>
      <p itemprop="description" class="product-description">
        شیر گاز زدایی یک طرفه LA.SA برای آزادسازی دی اکسید کربن (CO2) طراحی شده است که به طور طبیعی
        در طول فرآیند برشته کردن دانه های قهوه رخ می دهد. دریچه های گاز زدایی یک طرفه کار می کنند
        یکپارچگی و عملکرد ثابت را برای یک دوره دو ساله تضمین می کند. شکل و
        اندازه دریچه طوری طراحی شده است که اطمینان حاصل شود که بسته بندی قهوه خیلی سریع منبسط نمی شود.
      </p>
      <section id="action-holder">
        <P
          class="attention"
          style="margin-bottom: var(--gap);"
        >برای استعلام قیمت و سفارش با ما در ارتباط باشید</P>
        <div id="product-call-to-action-list">
          <button>
            <span>ارتباط با ما</span>
          </button>
          <button class="btn-secondary">
            <span>دانلود کاتالوگ</span>
          </button>
        </div>
      </section>
      <img class="spliter no-padding" src="~/assets/images/gas-spliter.svg" alt />
      <section>
        <span class="section-title">مشخصات</span>
        <table>
          <thead>
            <tr>
              <th>نوع</th>
              <th>واحد</th>
              <th>مقدار</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
            <tr>
              <td>مواد اولیه</td>
              <td>-</td>
              <td>پلیپروپلین درجه غذایی</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <section id="product-images-container" class="no-padding">
      <ul>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveBack.png" alt />
        </li>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveFront.png" alt />
        </li>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveBack.png" alt />
        </li>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveFront.png" alt />
        </li>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveBack.png" alt />
        </li>
        <li>
          <img itemprop="image" src="~/assets/images/valves/valveFront.png" alt />
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
  font-size: 20px;
}
main * {
  margin: 0;
}
@media (min-width: 980px) {
  main > * {
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
#product-images-container > ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  list-style: none;
}
#product-images-container > ul > li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-height: 50%;
}
#product-images-container > ul > li > img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
}
#product-data-container {
  padding-top: calc(var(--menu-height) * 1.8);
  height: 300vh;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
#product-data-container > *:not(.no-padding) {
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
  #product-data-container .product-name ~ * {
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

  #product-images-container > ul {
    flex-direction: row;
    overflow-x: auto;
    align-items: center;
    padding-inline: 20vw;
  }
  #product-images-container > ul li {
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