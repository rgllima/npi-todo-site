import Vue from "vue"
import Vuex from "vuex"

import system from "./modules/system"
import tasks from "./modules/tasks"
import projects from "./modules/projects"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    system,
    tasks,
    projects
  }
})
export default store
