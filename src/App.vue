<template>
  <div id="app">

    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '../src/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>

#app{
 

 position: relative;
    /* max-width:978px;  */
    width: 100%;
    min-height:100%; 
    background:rgb(240,240,240) url(https://wallpaperaccess.com/full/340434.png) repeat top center; 
}

</style>
