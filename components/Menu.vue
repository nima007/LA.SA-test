<template>
  <header>
    <section class="first-side-menu-container">
      <div id="lASA-LOGO">
        <img src="~/assets/images/LASA_Logo.png" alt="">
      </div>
      <div id="nav-container">
        <nav>
          <ul>
            <li>
              <NuxtLink>
                خانه
              </NuxtLink>
            </li>
            <li>
              <NuxtLink>
                درباره ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink>
                بلاگ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink>
                تماس با ما
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <!-- <span id="menu-gap-line"></span> -->
    <section class="second-side-container">
      <button>
        دانلود کاتولوگ ها
      </button>
    </section>

  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  display: flex;
  gap: 4px;
}

header>section {
  background-color: var(--dark-color);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 50px;
  height: 100%;
  width: fit-content;
  overflow: hidden;
  padding: 8px;
}

.second-side-container {
  position: relative;
  overflow: visible !important;
  padding-inline-start: 11px;
}

.second-side-container::before {
  content: "";
  width: 24px;
  height: 4px;
  display: inline-block;
  background-color: #FFDD55;
  position: absolute;
  transform: translateX(110%);
  border-radius: 4px;
}

#nav-container {
  padding-inline-end: 84px;
}

#lASA-LOGO,
#lASA-LOGO>img {
  height: 100%;
}

nav,
nav>ul,
nav>ul li,
nav ul li a {
  height: 100%;
}

nav>ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
}

nav>ul a {
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 12px;
}
</style>

<!-- #menu-gap-line{
  height: 4px;
  width: 24px;
  background-color: #FFDD55;
  position: absolute;
} -->