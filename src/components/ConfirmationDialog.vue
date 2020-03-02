<template>
  <v-row justify="center">
    <v-dialog :value="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{subtitle}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('close')">Cancel</v-btn>
          <v-btn color="red darken-1" text @click="$emit('confirm')">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>