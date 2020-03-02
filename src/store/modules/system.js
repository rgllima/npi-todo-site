const state = {
  navigation: [
    {
      name: "Tasks",
      value: "/",
      icon: "mdi-text"
    },
    {
      name: "Projects",
      value: "/projects",
      icon: "mdi-folder-account"
    },
    {
      name: "Settings",
      value: "/settings",
      icon: "mdi-cogs"
    }
  ],

  cardColors: ["#4f3961", "#75b79e", "#d45d79", "#706c61", "#ee8972", "#0f4c75"]
}

const mutations = {}

const actions = {}

const getters = {
  getCardColors: state => state.cardColors
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
