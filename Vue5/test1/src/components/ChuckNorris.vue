<template>
  <p>Une blague de chuck</p>
  <a @click.prevent="getBlague">Autre blague</a>
  <p>{{ blague.value }}</p>
  <p>{{ blague.icon_url }}</p>
  <img :src="blague.icon_url" :alt="blague.value">
</template>

<script setup>
import {onMounted, ref} from "vue";
const blague = ref({});

onMounted( () => {
  getBlague()
});

async function getBlague(){
  try {
    let url = 'https://api.chucknorris.io/jokes/random';
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
    blague.value = data
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped>
a {background-color: #282828; color:#fff;padding: 1rem;cursor:pointer;}
</style>