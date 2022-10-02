<template>
  <div id="Home">
    <video
      id="video-background" 
      src="../assets/video/trailer.mp4"
      :class="{'animate-sheikah-glow':isLoading}" 
      class="fixed top-0 left-0 right-0 bottom-0 min-w-full min-h-full object-cover animate-blur-bg" 
      type="video/mp4"
      playsinline loop muted
    ></video>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  watch: {
    isLoading(value){
      if(!value){
        document.getElementById('video-background').play()
        return
      }
      document.getElementById('video-background').pause()
    }
  }
}
</script>
