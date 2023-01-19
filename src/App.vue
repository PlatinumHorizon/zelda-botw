<template>
  <div id="app">
    <router-view/>
    <sheikah-loading></sheikah-loading>
  </div>
</template>
<script>

import SheikahLoading from './components/SheikahLoading.vue'

export default {
  name: 'app',
  components: {
    SheikahLoading,
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
