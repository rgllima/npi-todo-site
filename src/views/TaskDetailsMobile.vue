<template>
  <div class="task-details-mobile">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="#3f51b5">
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Task Details</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
          <TaskDetails @closeMobileDialog="closeDialog" :hideToolbar="true" />
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TaskDetails from "./TaskDetails";

export default {
  components: {
    TaskDetails
  },

  data() {
    return {
      dialog: true
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
      this.$router.go(-1);
    }
  }
};
</script>