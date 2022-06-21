<template>
  <h2>{{ message }}</h2>
  <div @click="changeMessage">click ici</div>
<!--  <click-counter :debut="4" :step="1"></click-counter>-->
<!--  <click-counter :debut="12" :step="12"></click-counter>-->
<!--  <click-counter :debut="16" :step="20"></click-counter>-->

<!--   La suite demain sur vos écrans -->
  <liste :infos="fruits">
    Voici une liste de fruits
    <template v-slot:footer>ici le texte du bas pour les fruits</template>
  </liste>
  <liste :infos="users">Voici une liste d'utilisateurs</liste>
  <liste></liste>

  <button @click="show = !show">Toggle</button>
  <Transition name="bounce" appear mode="out-in">
    <p v-if="show" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
    <p v-else style="text-align: center;">
      come back
    </p>
  </Transition>


</template>

<script setup>
import {reactive, ref} from "vue";
import ClickCounter from "./ClickCounter.vue";
import Liste from "./Liste.vue";
const message = ref('Bonjour à tous');
const show = ref(true)
const fruits = reactive(['banane', 'kiwi', 'papaye'])
const users = reactive(['michel', 'bernard', 'jean claude'])


function changeMessage()
{
  // console.log(message);
  // ref
  console.log(message.value);
  // reactive
  console.log(fruits)
  message.value = 'Message après avoir click';

}


setTimeout(() => {
  // ref
  message.value = 'Au revoir les amiches';
  // reactive
  fruits.push('fraise')
}, 2000)

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>