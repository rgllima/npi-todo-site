import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/tasks"
  },
  {
    path: "/tasks",
    name: "Tasks",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Tasks.vue")
  },
  {
    path: "/tasks/create",
    name: "CreateTask",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/CreateTask.vue")
  },
  {
    path: "/tasks/details",
    name: "TaskDetails",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/TaskDetailsMobile.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/projects/create",
    name: "CreateProject",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/CreateProject.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      public: true
    },
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next('/login')
      return
    }
  }
  next()
})


export default router;
