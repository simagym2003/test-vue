import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref(tasksInitialValue);

  const addTask = (text) => {
    tasks.value.push(createTask(text));
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((item) => item.id !== id);
  };

  watch(tasks, saveStateInLocalStorage, { deep: true });

  return { tasks, addTask, deleteTask };
});

const createTask = (text) => ({
  id: Math.random(),
  text,
  isCompleted: false,
});

const tasksKeyLocalStorage = "tasks";
const tasksLocalStorage = JSON.parse(
  localStorage.getItem(tasksKeyLocalStorage)
);
const saveStateInLocalStorage = (state) => {
  localStorage.setItem(tasksKeyLocalStorage, JSON.stringify(state));
};

const tasksFakeDate = [
  {
    id: 1,
    text: "text 1",
    isCompleted: true,
  },
  {
    id: 2,
    text: "text 2",
    isCompleted: false,
  },
];

const tasksInitialValue = tasksLocalStorage || tasksFakeDate;
