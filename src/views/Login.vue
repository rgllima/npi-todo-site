<template>
  <div class="login">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-text-field v-model="user.email" label="Email"></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-text-field v-model="user.password" label="Email"></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-button>Sign In</v-button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { email: "", password: "" }
    };
  }
};
</script>

<style lang="sass" scoped>
.login
</style>