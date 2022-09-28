import Vue from "vue";
import Vuex from "vuex";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    admin,
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    userList(state) {
      for (let i = 0; i < state.admin.users.length; i++) {
        !state.admin.users[i]["status"]
          ? (state.admin.users[i]["status"] = "Inactive")
          : (state.admin.users[i]["status"] = "Active");
      }
    },
  },
  actions: {
    userStatus({ commit }) {
      commit("userList");
    },
  },
  modules: {},
});
