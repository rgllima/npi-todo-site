import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/tasks"
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/Tasks.vue")
  },
  {
    path: "/tasks/create",
    name: "CreateTask",
    component: () => import("../views/CreateTask.vue")
  },
  {
    path: "/tasks/details",
    name: "TaskDetails",
    component: () => import("../views/TaskDetailsMobile.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/projects/create",
    name: "CreateProject",
    component: () => import("../views/CreateProject.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
