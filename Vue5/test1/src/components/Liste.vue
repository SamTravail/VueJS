<template>
  <h3> <slot></slot> </h3>
<!--  {{ infos }}-->
  <ul>
    <li v-for="item in infos">{{ item }}</li>
  </ul>
  <slot name="footer"></slot>
</template>

<script setup>

const props = defineProps(
    // ['infos']
    // {
    //   infos: Array
    // }
    {
      infos: {
        type: Array,
        default: ['element 1', 'element 2']
      }
    }
)

</script>

<style scoped>


</style>