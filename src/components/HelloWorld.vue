<script setup>

import { onMounted } from "vue";
import { useProductStore } from "../store/product";

const productStore = useProductStore()

// recibe una promesa 
onMounted( async()=>{
  await productStore.setProduct()
  //console.log('skksk', productStore.products)
})


</script>

<template>
<div>
  <h1>Lista de Productos </h1>
  <br>
  <ul>
    <li v-for="(item, index) in productStore.getProducts">
      {{item.name}}
    </li>
  </ul>
</div>
</template>

<style scoped>

</style>
