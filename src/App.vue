<template>
  <v-app>
    <component class="isMobile" :is="mobile_layout" />
    <component class="isDesktop" :is="desktop_layout" />
  </v-app>
</template>

<script>
// const mobile_layout = "mobile-layout";
// const desktop_layout = "desktop-layout";

export default {
  name: "App",

  data() {
    return {
      mobile_layout: "mobile-layout",
      desktop_layout: "desktop-layout"
    };
  },

  // computed: {
  //   layout() {
  //     console.log(window.innerWidth);
  //     return window.innerWidth < 768 ? mobile_layout : desktop_layout;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

#app {
  font-family: "Montserrat", sans-serif;

  .isMobile {
    display: none;
  }

  @media all and (max-width: 768px) {
    .isMobile {
      display: block !important;
    }

    .isDesktop {
      display: none !important;
    }
  }
}
</style>
