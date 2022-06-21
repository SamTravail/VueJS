<template>
  <h2>Beers</h2>
  <section id="beers">
    <div v-for="beer in beers">
      {{ beer.name }} ( {{ beer.city }} / {{ beer.country }} / {{ beer.state }}  )

      <a :href="beer.website_url"  target="_blank">{{ beer.website_url }}</a>
    </div>
  </section>
</template>

<script setup>

import {onMounted, ref} from "vue";

const beers = ref([]);

onMounted( async () => {
  console.log('je viens de créer le component Beer')
  let url = 'https://api.openbrewerydb.org/breweries';
  let response = await fetch(url);
  const data = await response.json();
  beers.value = data
  console.log(data)
})


</script>


<style>


</style>