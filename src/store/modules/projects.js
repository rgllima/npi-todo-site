import ProjectRepository from "../../repository/ProjectRepository";

const state = {
  projects: []
};

const mutations = {
  setProject: (state, payload) => {
    state.projects = payload;
  },

  pushProject: (state, payload) => {
    state.projects.unshift(payload);
  }
};

const actions = {
  createProject({ commit }, payload) {
    commit("pushProject", payload);
  },

  async fetchProjects({ commit }) {
    await ProjectRepository.getAll()
      .then(projects => {
        commit("setProject", projects.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const getters = {
  getProjects: state => state.projects
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
