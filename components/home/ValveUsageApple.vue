<template>
  <div id="main-valve-usage" ref="MAIN_WARPPER_SECTION">
    <img id="float-valve-image" ref="valve_image"
      :class="{ 'on-pack': sec3Vis, 'hide-opacity-and-size': !valveSec1Vis || sec4Vis }"
      src="~/assets/images/valves/valveBack.png" alt />
    <section id="section-1" ref="SECTION_1" :class="{ 'in-viewport': VS1 }">
      <div class="section-content-wrapper opacity-base">
        <div class="content-start-side translate-base">
          <h1>hello word</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero accusantium illum incidunt ipsa
            repellendus facere nihil voluptates voluptatibus similique, laborum, non perferendis culpa cumque rerum
            aperiam! Adipisci, quae natus?</p>
        </div>
        <div class="content-end-side translate-base">
          <h1>hello word</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero accusantium illum incidunt ipsa
            repellendus facere nihil voluptates voluptatibus similique, laborum, non perferendis culpa cumque rerum
            aperiam! Adipisci, quae natus?</p>
        </div>
      </div>
    </section>
    <section id="section-2" ref="SECTION_2" :class="{ 'in-viewport': VS2 }">
      <div class="section-content-wrapper opacity-base">
        <div class="content-start-side translate-base">
          <h1>GoodBye word</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero accusantium illum incidunt ipsa
            repellendus facere nihil voluptates voluptatibus similique, laborum, non perferendis culpa cumque rerum
            aperiam! Adipisci, quae natus?</p>
        </div>
        <div class="content-end-side translate-base">
          <h1>GoodBye word</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero accusantium illum incidunt ipsa
            repellendus facere nihil voluptates voluptatibus similique, laborum, non perferendis culpa cumque rerum
            aperiam! Adipisci, quae natus?</p>
        </div>
      </div>
    </section>
    <!-- <section id="section-3">
      <div class="section-content-wrapper full-width">
        
      </div>
    </section> -->
    <div id="status-holder">
      <p>VS1 : {{ VS1 }}</p>
      <p>VS2 : {{ VS2 }}</p>
    </div>
  </div>
</template>

<script setup>
const SECTION_1 = ref();
const SECTION_2 = ref();
const VS1 = useElementVisibility(SECTION_1, { rootMargin: "-50% 0px -50% 0px" })
const VS2 = useElementVisibility(SECTION_2, { rootMargin: "-50% 0px -50% 0px" })
onMounted(() => {

})

// const VS1 = 
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
  transform: translate(-50%, -50%);
  width: var(--valve-size);
  z-index: 10;
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

#main-valve-usage>section:nth-of-type(1) {
  background: orange;
}

#main-valve-usage>section:nth-of-type(2) {
  background: purple;
}

.section-content-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  padding: var(--menu-height);
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

.section-content-wrapper.full-width {
  width: 100%;
  min-height: 100vh;
}

@media (min-width: 980px) {

  .section-content-wrapper .content-start-side,
  .section-content-wrapper .content-end-side {
    width: calc(50% - var(--valve-size));
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
  }.section-content-wrapper>.content-end-side.translate-base {
    translate: -100% 0;
  }

  .in-viewport .section-content-wrapper>.translate-base {
    translate: 0 0;
  }
}
</style>