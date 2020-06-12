import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/processos",
      name: "processos",
      component: () => import("./components/ListaDeProcessos")
    },
    {
      path: "/processos/:id",
      name: "detalhes-processos",
      component: () => import("./components/Processo")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddProcesso")
    }
  ]
});
