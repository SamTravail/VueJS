<template>
  <div class="btn" @click="addCounter">{{ counter }}</div>
</template>

<script setup>
import {onMounted, ref} from "vue";
const props = defineProps(['debut', 'step'])

const counter = ref(0);
function addCounter() {
  counter.value += props.step
}

onMounted(() => {
  counter.value = props.debut
})

</script>

<style scoped>
.btn {
  background-color: green; color:#fff; padding: 1rem;
}
</style>