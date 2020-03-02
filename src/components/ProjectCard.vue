<template>
  <div class="project-card">
    <v-card :color="project.color" dark>
      <v-card-title class="headline">{{project.title}}</v-card-title>

      <v-card-subtitle>{{project.description}}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  mounted() {
    console.log(this.project);
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  margin: 5px 0;

  .v-card {
    height: 125px;
  }
}
</style>