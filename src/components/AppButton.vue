<script setup>
const props = defineProps(["label"]);
</script>

<template>
  <button class="app-button">{{ props.label }}</button>
</template>

<style scoped>
.app-button {
  background: none;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  box-shadow: 0px 2px 4px 1px rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
