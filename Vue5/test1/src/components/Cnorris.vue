<template>
  <p>Une blague de Chuck</p>
  <p>{{blague}}</p>
</template>

<script setup>
import {onMounted, ref} from "vue";

const blague = ref({});

onMounted( async () => {
  let url = 'https://api.chucknorris.io/jokes/random';
  let response = await fetch(url)
  const data = await response.json();
  console.log(data)
  blague.value = data.value
})


</script>

<style>

</style>