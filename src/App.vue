<template>
  <v-app>
    <template v-if="!$route.meta.public">
      <div>
        <component class="isMobile" :is="mobile_layout" />
        <component class="isDesktop" :is="desktop_layout" />
      </div>
    </template>

    <template v-else>
      <router-view />
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      mobile_layout: "mobile-layout",
      desktop_layout: "desktop-layout"
    };
  }
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
