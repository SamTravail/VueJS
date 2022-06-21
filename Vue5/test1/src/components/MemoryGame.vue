<template>
  <h2>Jeux du memory</h2>

  <div v-if="!starter">
      <p> Action de commencer la partie </p>
    <button @click="goPartie">Lancer la partie</button>
  </div>

  <div v-else-if="starter">
    <img src="../assets/carte.jpeg" alt="">
    <img src="https://picsum.photos/id/237/183/250" alt="">
  </div>


</template>

<script setup>
import {ref} from "vue";

const countcard = ref(10);
const starter = ref(false);
function goPartie()
{
  starter.value = true
}

</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 2rem;
}
</style>