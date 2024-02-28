<script setup>
import { ref } from "vue";
import { useTasksStore } from "@/stores/tasks";
import AppButton from "./AppButton.vue";

const store = useTasksStore();
const text = ref("");
</script>

<template>
  <div class="task-form">
    <input
      type="text"
      placeholder="Например, купить молока"
      v-model="text"
      @keyup.enter="store.addTask(text)"
      class="task-form-input"
    />
    <AppButton @click="store.addTask(text)" label="Добавить" />
  </div>
</template>
<style scoped>
.task-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
}
.task-form-input {
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
}
</style>
