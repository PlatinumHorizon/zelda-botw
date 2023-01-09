<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <sheikah-loading></sheikah-loading>
  </div>
</template>
<script>

import SheikahLoading from './components/SheikahLoading.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    SheikahLoading,
    NavBar
  },
  mounted(){
    document.onreadystatechange = () => {
      if(document.readyState == "complete"){
        this.$store.commit('changeLoading')
      }
    }
  }
}
</script>
