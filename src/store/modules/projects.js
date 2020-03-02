const state = {
  projects: [
    {
      _id: 1212,
      title: "Personal",
      description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
      color: "#4f3961"
    },
    {
      _id: 1213,
      title: "Work",
      description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
      color: "#ee8972"
    },
    {
      _id: 1214,
      title: "College",
      description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
      color: "#0f4c75"
    }
  ]
}

const mutations = {
  pushProject: (state, payload) => {
    state.projects.unshift(payload)
  }
}

const actions = {
  createProject({ commit }, payload) {
    commit("pushProject", payload)
  }
}

const getters = {
  getProjects: state => state.projects
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
