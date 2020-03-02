<template>
  <div class="mobile-layout">
    <div class="mobile-content">
      <router-view />
    </div>

    <v-bottom-navigation v-model="activeBtn" color="#3f51b5" fixed grow>
      <v-btn v-for="(nav, key) in navigation" :value="nav.value" :key="key">
        <span>{{nav.name}}</span>
        <v-icon>{{nav.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeBtn: window.location.pathname
    };
  },

  watch: {
    activeBtn() {
      this.pushRoute(this.activeBtn);
    }
  },

  computed: {
    ...mapState({ navigation: state => state["system"]["navigation"] })
  },

  methods: {
    pushRoute(path) {
      if (this.$route.path === path) {
        return;
      }

      this.$router.push(path);
    }
  },

  // mounted() {
  //   // console.log(this.$router)
  //   console.log(window.location.pathname);
  //   // this.activeBtn = this.$route.path
  // }
};
</script>

<style lang="scss" scoped>
// .mobile-layout {
//   .mobile-content {
//     padding: 10px;
//   }
// }
</style>