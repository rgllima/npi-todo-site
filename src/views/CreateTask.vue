<template>
  <div class="create-task">
    <v-dialog
      v-model="dialog"
      :fullscreen="mobile"
      :hide-overlay="mobile"
      max-width="400"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card>
        <v-toolbar dark color="#3f51b5">
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Create Task</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="createTask">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="project"
                :items="projects"
                item-text="title"
                label="Project"
                return-object
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-dialog
                ref="dateDialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Select a Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dateDialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-dialog
                ref="timerDialog"
                v-model="timerModal"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Select a Timer"
                    prepend-icon="mdi-av-timer"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="timerModal" v-model="time" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="timerModal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.timerDialog.save(time)">OK</v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>

            <v-col class="d-flex" cols="12" sm="12">
              <v-textarea
                v-model="description"
                name="input-7-1"
                label="Description"
                hint="Describe your task"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <v-snackbar v-model="snackbar">
          {{ text }}
          <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: true,
      mobile: window.innerWidth <= 768,
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      time: null,
      timerModal: false,
      snackbar: false,
      text: "",
      id: null,
      title: "",
      project: "",
      checked: false,
      description: ""
    };
  },

  computed: {
    ...mapGetters({
      projects: "projects/getProjects"
    })
  },

  methods: {
    closeDialog() {
      this.dialog = false;
      this.$router.go(-1);
    },

    createTask() {
      let formStatusMsg = this.checkForm();
      let { edit } = this.$route.query;

      if (formStatusMsg.length === 0) {
        let payload = {
          id: this.id,
          title: this.title,
          description: this.description,
          checked: this.checked,
          project: this.project,
          date: this.date,
          time: this.time
        };

        if (edit) {
          this.$store.dispatch("tasks/editTask", payload);
        } else {
          this.$store.dispatch("tasks/createTask", payload);
        }

        this.closeDialog();
      } else {
        this.showSnackbar(formStatusMsg);
      }
    },

    checkForm() {
      if (!this.project) {
        return "Please, select one Project!";
      }

      if (!this.title) {
        return "Please, entear a Title!";
      }

      if (!this.date) {
        return "Please, select a Date!";
      }

      if (!this.time) {
        return "Please, select a Timer!";
      }

      return "";
    },

    showSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    }
  },

  mounted() {
    let { edit } = this.$route.query;
    if (edit) {
      let task = this.$store["getters"]["tasks/getSelectedTask"];
      this.id = task.id;
      this.title = task.title;
      this.description = task.description;
      this.project = task.project;
      this.checked = task.checked;
      this.date = task.date;
      this.time = task.time;
    }
  }
};
</script>