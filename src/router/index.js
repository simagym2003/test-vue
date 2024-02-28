import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("../views/TasksView.vue"),
    },
  ],
});

export default router;
