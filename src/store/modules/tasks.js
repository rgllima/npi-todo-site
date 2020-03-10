import TaskRepository from "../../repository/TaskRepository";

const state = {
  tasks: [],
  allTasks: [],
  selectedTask: null
};

const mutations = {
  setTasks: (state, payload) => {
    state.tasks = payload;
  },

  pushTask: (state, payload) => {
    state.tasks.push(payload);
  },

  syncTask(state, payload) {
    let task = state.tasks.filter(task => task.id === payload.id);
    Object.assign(task[0], payload.data);
  },

  setSelectedTask: (state, payload) => {
    state.selectedTask = payload;
  },

  setCheckedAttr(state, payload) {
    let task = state.tasks.filter(task => task === payload);
    task[0].checked = !task[0].checked;
  },

  delTask(state, payload) {
    let tasks = state.tasks.filter(task => task !== payload);
    state.tasks = tasks;
    state.selectedTask = null;
  }
};

const actions = {
  fetchTasks({ commit }) {
    TaskRepository.findAll()
      .then(res => {
        commit("setTasks", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  createTask({ commit }, payload) {
    // Temp ID to sync stored Task
    payload["id"] = new Date().getMilliseconds();

    commit("pushTask", payload);

    TaskRepository.create(payload)
      .then(res => {
        commit("syncTask", {
          id: payload["id"],
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  editTask({ commit }, payload) {
    commit("syncTask", {
      id: payload["id"],
      data: payload
    });

    TaskRepository.findByIdAndUpdate(payload["id"], payload)
      .then(res => {
        commit("syncTask", {
          id: payload["id"],
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  changeCheckedAttr({ dispatch }, payload) {
    payload["checked"] = !payload["checked"];
    dispatch("editTask", payload);
  },

  delTask({ commit }, payload) {
    commit("delTask", payload);

    TaskRepository.delete(payload["id"])
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const getters = {
  getTasks: state => state.tasks,
  getSelectedTask: state => state.selectedTask
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
