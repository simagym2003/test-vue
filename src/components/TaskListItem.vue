<script setup>
import { ref } from "vue";
import { useTasksStore } from "@/stores/tasks";
import AppButton from "./AppButton.vue";

const props = defineProps(["item"]);
const store = useTasksStore();
const isEditing = ref(false);

const startEditing = () => (isEditing.value = true);
const finishEditing = () => (isEditing.value = false);
</script>

<template>
  <div class="task-item">
    <input type="checkbox" v-model="props.item.isCompleted" />
    <div v-if="!isEditing" :class="{ isCompleted: props.item.isCompleted }">
      {{ props.item.text }}
    </div>
    <input type="text" v-else v-model="props.item.text" />
    <!-- Edit buttons -->
    <AppButton v-if="!isEditing" @click="startEditing" label="✍️" />
    <AppButton v-else @click="finishEditing" label="💾" />
    <!-- -->
    <AppButton @click="store.deleteTask(props.item.id)" label="🗑️" />
  </div>
</template>

<style scoped>
.task-item {
  display: grid;
  grid-template-columns: auto 1fr repeat(2, auto);
  gap: 10px;
}
.isCompleted {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
