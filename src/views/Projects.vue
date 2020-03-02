<template>
  <div class="projects">
    <v-toolbar flat extension-height="5">
      <v-toolbar-title>Projects</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="$router.push('/projects/create')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="projects-content">
      <ProjectCard v-for="(project, key) in projects" :project="project" :key="key" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";

import { mapGetters } from "vuex";

export default {
  components: {
    ProjectCard
  },

  computed: {
    ...mapGetters({
      projects: "projects/getProjects"
    })
  }
};
</script>

<style lang="scss" scoped>
.projects {
  .projects-content {
    padding: 10px;
  }
}
</style>