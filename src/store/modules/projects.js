import ProjectRepository from "../../repository/ProjectRepository";

const state = {
  projects: []
};

const mutations = {
  setProject: (state, payload) => {
    state.projects = payload;
  },

  pushProject: (state, payload) => {
    state.projects.push(payload);
  }
};

const actions = {
  async createProject({ commit, dispatch }, payload) {
    commit("pushProject", payload);
    await ProjectRepository.create(payload)
      .then(res => {
        dispatch("fetchProjects");
      })
      .catch(err => {
        console.log(err);
      });
  },

  async fetchProjects({ commit }) {
    await ProjectRepository.findAll()
      .then(res => {
        console.log(res.data)
        commit("setProject", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  async updateOne({ commit, dispatch }, payload) {
    await ProjectRepository.findByIdAndUpdate(payload["id"], payload)
      .then(res => {
        console.log(res);
        dispatch("fetchProjects");
      })
      .catch(err => {
        console.log(err);
      });
  },

  async deleteOne({ commit, dispatch }, payload) {
    await ProjectRepository.delete(payload["id"])
      .then(res => {
        dispatch("fetchProjects");
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
