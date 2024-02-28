<script setup>
import TasksList from "../components/TasksList.vue";
</script>
<template>
  <div class="about">
    <h1>Список Задач</h1>
    <TasksList />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: grid;
    align-content: center;
  }
}
</style>
