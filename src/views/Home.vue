<template>
  <div id="Home">
    <video
      id="video-background" 
      src="../assets/video/zelda-botw-bg.mp4"
      :class="{'animate-sheikah-glow':isLoading}" 
      class="fixed top-0 left-0 right-0 bottom-0 z-[-1] min-w-full min-h-full object-cover" 
      type="video/mp4"
      playsinline loop muted
    ></video>
  </div>
</template>

<script>
import gsap from '../helpers/gsap'
export default {
  name: 'Home',
  data: () => ({
    tl: gsap.timeline(),
    texto: 'Watch the full trailer'
  }),
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
  },
  methods: {
    changeFont(translate){

      let currentLetterIndex = 0;
      let nextLetterIndex = 0;

      let tl = gsap.timeline(); 

      for(currentLetterIndex = 0; currentLetterIndex < this.texto.length; currentLetterIndex++){
        
        let currentLetter = document.getElementsByClassName('translate')[currentLetterIndex]

        if(translate){

          tl.to(currentLetter, {text: this.texto[currentLetterIndex] , duration: .008})
          
          tl.to(currentLetter, {text: this.texto[currentLetterIndex] , fontFamily: 'Roboto', duration: .008})

        } else {

          tl.to(currentLetter, {text: this.texto[currentLetterIndex] , duration: .01})

          tl.to(currentLetter, {text: this.texto[currentLetterIndex] , fontFamily: 'Sheikah', duration: .01})

        }

        for(nextLetterIndex = currentLetterIndex + 1; nextLetterIndex < this.texto.length; nextLetterIndex++){
          let nextLetter = document.getElementsByClassName('translate')[nextLetterIndex]
          if(nextLetter.innerHTML != ' '){
            tl.to(nextLetter, {text: this.makeHash(1), duration: .008})
          }
        }
      }
    },
    makeHash(length) {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    replaceAt(index, replacement) {
      return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
  },
}
</script>

<style scoped>

</style>
