<template>
  <div class="task-card" :class="{'is-selected': task === selectedTask}" @click="selectTask">
    <v-row justify="space-between">
      <v-col cols="1" md="1">
        <v-icon
          v-if="!task.checked"
          medium
          color="#3f51b5"
          @click.stop="changeCheckedAttr"
        >mdi-checkbox-blank-circle-outline</v-icon>
        <v-icon
          v-else
          medium
          color="#3f51b5"
          @click.stop="changeCheckedAttr"
        >mdi-check-circle-outline</v-icon>
      </v-col>
      <v-col class="task-title" :class="{'is-checked': task.checked}" cols="7" md="7">{{task.title}}</v-col>
      <v-col
        :class="{'is-checked': task.checked}"
        cols="auto"
        md="auto"
      >{{showFormatedTime(task.time)}}</v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      selectedTask: "tasks/getSelectedTask"
    })
  },

  methods: {
    selectTask() {
      this.$store.commit("tasks/setSelectedTask", this.task);

      let isMobile = window.innerWidth <= 768;
      if (isMobile) {
        this.$router.push("/tasks/details");
      }
    },

    changeCheckedAttr() {
      this.$store.dispatch("tasks/changeCheckedAttr", this.task);
    },

    truncateWithEllipses(text, max) {
      return text.substr(0, max - 1) + (text.length > max ? "..." : "");
    },

    showFormatedTime(time) {
      let timeSplitted = time.split(":");
      let hour = timeSplitted[0];
      let minutes = timeSplitted[1];

      if (parseInt(hour) >= 13) {
        return `${hour - 12}: ${minutes} PM`;
      } else {
        return `${time} AM`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.task-card {
  margin: 5px 0;
  padding: 5px 10px;
  color: #3f51b5;
  caret-color: #3f51b5;
  border-radius: 4px;
  border: #3f51b5 solid 0.5px;
  cursor: pointer;

  .col {
    text-align: left;
  }

  .task-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .is-checked {
    text-decoration: line-through;
  }
}

.is-selected {
  background: #dddddd !important;
}
// .v-application .ma-2 {
//   margin: 0 !important;
// }
</style>