<template>
  <div class="tasks">
    <v-toolbar flat extension-height="5">
      <v-toolbar-title>Tasks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn icon @click="$router.push('/tasks/create')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="tasks-content">
      <TaskCard v-for="(task, key) in tasks" :task="task" :key="key" />
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard";

import { mapGetters } from "vuex";

export default {
  components: {
    TaskCard
  },

  computed: {
    ...mapGetters({
      tasks: "tasks/getTasks"
    })
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  .tasks-content {
    padding: 10px;
  }
}
</style>