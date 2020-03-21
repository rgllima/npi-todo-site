<template>
  <div class="register">
    <v-container class="background" fluid>
      <div class="box">
        <v-col>
          <h3>Criar uma Conta</h3>
          <v-text-field
            type="email"
            v-model="user.email"
            :error="triedRegister && !user.email"
            label="E-mail"
          ></v-text-field>

          <v-text-field
            type="text"
            v-model="user.name"
            :error="triedRegister && !user.name"
            label="Nome"
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="user.password"
            :error="triedRegister &&!user.password"
            label="Senha"
          ></v-text-field>

          <div class="buttons">
            <v-btn class="button" color="#a0db8e" :loading="loading" @click="doRegister">Criar COnta</v-btn>
            <v-btn class="button" @click="$router.push('/login')">Já Tenho Conta</v-btn>
          </div>
        </v-col>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: "", email: "", password: "" },
      triedRegister: false,
      loading: false
    };
  },

  methods: {
    async doRegister() {
      this.loading = true;
      this.triedRegister = true;

      await this.$store.dispatch("auth/register", this.user);

      this.loading = false;
    }
  }
};
</script>

<style lang="sass" scoped>
.register
  height: 100vh
  min-height: 500px

  .background
    height: 100%
    background-image: url("../assets/register-background.jpg")
    background-size: cover
    display: flex
    justify-content: center
    align-items: center

    .box
      width: 300px
      height: 380px
      background: white
      border-radius: 10px
      text-align: center

      .buttons
        margin-top: 25px
        display: flex
        flex-direction: column

        .button:not(:first-child)
          margin-top: 10px
</style>