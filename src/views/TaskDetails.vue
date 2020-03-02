<template>
  <div class="task-details">
    <ConfirmationDialog
      title="Do you want to delete this task?"
      subtitle="This action cannot be undone."
      :dialog="delDialog"
      @close="closeDelDialog"
      @confirm="delTask"
    />

    <v-toolbar v-if="!hideToolbar" flat extension-height="5">
      <v-toolbar-title>Tasks Details</v-toolbar-title>
    </v-toolbar>

    <div v-if="!task" class="task-empty">
      <v-icon x-large>mdi-file-find</v-icon>
      <p>Select a Task to show here</p>
    </div>

    <div class="task-content" v-else>
      <v-card flat>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="10">
              <div>
                <p>
                  <strong>Title:</strong>
                  {{task.title}}
                </p>

                <p>
                  <strong>Description:</strong>
                  {{task.description}}
                </p>

                <p>
                  <strong>Deadline:</strong>
                  {{deadline}}
                </p>

                <v-card class="task-project" :color="task.project.color">
                  <strong>Project:</strong>
                  {{task.project.title}}
                </v-card>
              </div>
            </v-col>

            <v-col cols="auto" class="text-center pl-0">
              <v-row class="flex-column ma-0 fill-height" justify="center">
                <v-col v-if="!task.checked" class="px-0">
                  <v-btn icon @click="changeCheckedAttr">
                    <v-icon color="#3f51b5">mdi-checkbox-blank-circle-outline</v-icon>
                  </v-btn>
                </v-col>

                <v-col v-else class="px-0">
                  <v-btn icon @click="changeCheckedAttr">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon @click="$router.push({path:'/tasks/create', query: {edit: true}})">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon @click="delDialog = true">
                    <v-icon color="#ff7373">mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import ConfirmationDialog from "../components/ConfirmationDialog";

import { mapGetters } from "vuex";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default {
  props: {
    hideToolbar: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ConfirmationDialog
  },

  data() {
    return {
      delDialog: false
    };
  },

  computed: {
    ...mapGetters({
      task: "tasks/getSelectedTask"
    }),

    deadline() {
      let date = this.task.date.split("-");
      let monthStr = months[parseInt(date[1])];
      return `${date[2]} ${monthStr} ${date[0]}, ${this.task.time}`;
    }
  },

  methods: {
    changeCheckedAttr() {
      this.$store.dispatch("tasks/changeCheckedAttr", this.task);
    },

    closeDelDialog() {
      this.delDialog = false;
    },

    async delTask() {
      this.closeDelDialog();
      this.$emit("closeMobileDialog");

      this.$store.dispatch("tasks/delTask", this.task);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-details {
  height: 100%;

  .task-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .task-content {
    padding: 10px;

    .task-project {
      color: white;
      padding: 10px;
      font-size: 1.15rem;
    }
  }
}
</style>