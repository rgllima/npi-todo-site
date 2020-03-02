<template>
  <div class="desktop-layout">
    <v-row no-gutters>
      <v-col class="desktop-project" cols="12" sm="4">
        <Projects />
      </v-col>

      <v-col class="is-padding-5 desktop-tasks" cols="12" sm="4">
        <Tasks />
      </v-col>

      <v-col class="desktop-task-details" cols="12" sm="4">
        <TaskDetails />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Projects from "../../views/Projects";
import Tasks from "../../views/Tasks";
import TaskDetails from "../../views/TaskDetails";

export default {
  components: {
    Projects,
    Tasks,
    TaskDetails
  }
};
</script>

<style lang="scss" scoped>
.desktop-layout {
  background: whitesmoke;
  height: 100%;
  overflow: hidden;

  .desktop-project,
  .desktop-tasks {
    height: 100vh;
    border-right: solid 0.1px rgb(200, 200, 200);
  }

  .desktop-task-details {
    height: 100vh;
  }
}
</style>