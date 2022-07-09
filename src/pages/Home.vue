<script setup>
import { onMounted, computed } from "vue";
import { useClientStore } from '../store/client'

const clientStore = useClientStore()



// lifecycle hooks
onMounted( async() => {
    await clientStore.setClient()
    //console.log(clientStore.clients)
});
</script>
<template>
  <div>
    <h1>Lista de Clientes</h1>
    <br />
    <ul>
        <li v-for="(item, index) in clientStore.getClients" :key="item">
        {{item.name}}
        </li>
    </ul>
    <!-- <button @click="mandar">llamar funcion</button> -->
  </div>
</template>
