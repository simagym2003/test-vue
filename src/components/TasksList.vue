<script setup>
import { useTasksStore } from "@/stores/tasks";
import TaskLisItem from "./TaskListItem.vue";
import TaskListForm from "./TaskListForm.vue";

const store = useTasksStore();
</script>

<template>
  <div class="task-list">
    <TaskListForm />
    <TaskLisItem v-for="item in store.tasks" :item="item" :key="item.id" />
  </div>
</template>

<style scoped>
.task-list {
  display: grid;
  gap: 10px;
  padding: 5px;
}
</style>
