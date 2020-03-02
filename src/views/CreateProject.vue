<template>
  <div class="create-project">
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
          <v-toolbar-title>Create Project</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="createProject">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid>
          <v-col class="d-flex">
            <v-text-field v-model="title" label="Title"></v-text-field>
          </v-col>

          <v-col class="colors">
            <label class="label">Select a Color Card</label>
            <v-row class="colors-content" justify="space-between">
              <v-chip color="#27496d" @click="selectColor('#27496d')">
                <v-icon v-if="'#27496d' === selectedColor" left color="white">mdi-check</v-icon>
              </v-chip>

              <v-chip
                v-for="(color, key) in colors"
                :color="color"
                @click="selectColor(color)"
                :key="key"
              >
                <v-icon v-if="color === selectedColor" left color="white">mdi-check</v-icon>
              </v-chip>
            </v-row>
          </v-col>

          <v-col class="d-flex">
            <v-textarea
              v-model="description"
              name="input-7-1"
              label="Description"
              hint="Describe your project"
            ></v-textarea>
          </v-col>
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
      snackbar: false,
      text: "",
      title: "",
      selectedColor: "#27496d",
      description: "",
      mobile: window.innerWidth <= 768
    };
  },

  computed: {
    ...mapGetters({
      colors: "system/getCardColors"
    })
  },

  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },

    closeDialog() {
      this.dialog = false;
      this.$router.go(-1);
    },

    createProject() {
      let formStatusMsg = this.checkForm();

      if (formStatusMsg.length === 0) {
        let payload = {
          title: this.title,
          description: this.description,
          color: this.selectedColor
        };

        this.$store.dispatch("projects/createProject", payload);
        this.closeDialog();
      } else {
        this.showSnackbar(formStatusMsg);
      }
    },

    checkForm() {
      if (!this.title) {
        return "Please, type a Title!";
      }

      if (!this.description) {
        return "Please, type a brief Description!";
      }

      return "";
    },

    showSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.colors-content {
  margin: 10px 0;
}

.v-chip.v-size--default {
  border-radius: 100% !important;
  height: 32px;
  width: 32px;
}
</style>