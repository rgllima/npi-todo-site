const state = {
  tasks: [
    {
      _id: 1234,
      title: "Alinhar o conteúdo das divs com o titulo",
      description: "Aqui temos uma descrição dessa tarefa",
      project: {
        _id: 1213,
        title: "Work",
        description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
        color: "#ee8972"
      },
      date: "2020-02-23",
      time: "11:20",
      checked: false,
      createdAt: "2020-02-23T19:23:57.000Z"
    },
    {
      _id: 1235,
      title: "Uma breve tafera pra gente fazer esses dias",
      description: "Aqui temos uma descrição dessa tarefa",
      project: {
        _id: 1213,
        title: "Work",
        description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
        color: "#ee8972"
      },
      date: "2020-02-23",
      time: "12:20",
      checked: true,
      createdAt: "2020-02-23T19:23:57.000Z"
    },
    {
      _id: 1236,
      title: "Uma breve tafera pra gente fazer esses dias",
      description: "Aqui temos uma descrição dessa tarefa",
      project: {
        _id: 1213,
        title: "Work",
        description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
        color: "#ee8972"
      },
      date: "2020-02-23",
      time: "13:20",
      checked: false,
      createdAt: "2020-02-23T19:23:57.000Z"
    },
    {
      _id: 1237,
      title: "Uma breve tafera pra gente fazer esses dias",
      description: "Aqui temos uma descrição dessa tarefa",
      project: {
        _id: 1212,
        title: "Personal",
        description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
        color: "#4f3961"
      },
      date: "2020-02-23",
      time: "01:20",
      checked: false,
      createdAt: "2020-02-23T19:23:57.000Z"
    },
    {
      _id: 1238,
      title: "Uma breve tafera pra gente fazer esses dias",
      description: "Aqui temos uma descrição dessa tarefa",
      project: {
        _id: 1212,
        title: "Personal",
        description: "ag ag aggajsa ahsanj jsanj  jankas jns ans ans",
        color: "#4f3961"
      },
      date: "2020-02-23",
      time: "14:20",
      checked: false,
      createdAt: "2020-02-23T19:23:57.000Z"
    }
  ],

  allTasks: [],

  selectedTask: null
}

const mutations = {
  pushTask: (state, payload) => {
    state.tasks.push(payload)
  },

  editTask(state, payload) {
    let task = state.tasks.filter(task => task._id === payload._id)
    Object.assign(task[0], payload)
  },

  setSelectedTask: (state, payload) => {
    state.selectedTask = payload
  },

  setCheckedAttr(state, payload) {
    let task = state.tasks.filter(task => task === payload)
    task[0].checked = !task[0].checked
  },

  delTask(state, payload) {
    let tasks = state.tasks.filter(task => task !== payload)
    state.tasks = tasks
    state.selectedTask = null
  }
}

const actions = {
  createTask({ commit }, payload) {
    //TODO gerar um ID quando for salvar a tarefa
    payload["_id"] = new Date().getMilliseconds();
    commit("pushTask", payload)
  },

  editTask({ commit }, payload) {
    commit("editTask", payload)
  },

  changeCheckedAttr({ commit }, payload) {
    commit("setCheckedAttr", payload)
  },

  delTask({ commit }, payload) {
    commit("delTask", payload)
  }
}

const getters = {
  getTasks: state => state.tasks,
  getSelectedTask: state => state.selectedTask
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
