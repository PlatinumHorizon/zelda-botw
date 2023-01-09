<template>
  <div id="Home">
    <video
      id="video-background" 
      src="../assets/video/trailer.mp4"
      :class="{'animate-sheikah-glow':isLoading}" 
      class="fixed top-0 left-0 right-0 bottom-0 z-[-1] min-w-full min-h-full object-cover animate-blur-bg" 
      type="video/mp4"
      playsinline loop muted
    ></video>
    <div class="fixed top-0 left-0 right-0 bottom-0 z-[-1] min-w-full min-h-full bg-black opacity-30" ></div>
    <div class="flex flex-col-reverse lg:flex-row justify-evenly items-center">
      <div>
        <p class="font-roboto text-white drop-shadow-blue-glow text-lg sm:text-3xl italic my-10">
          "May the goddess smile upon you"
        </p>
        <div class="relative w-full">
          <div class="relative max-w-[200px] my-0 mx-auto">
            <img 
              src="../assets/img/sheikah_frame.png"
              class="max-w-[200px] absolute z-10 hover:drop-sh-sheikah-glow cursor-pointer"
              @mouseenter="translate"
              @mouseout="codify"
            >
            <video
              id="trailer"
              src="../assets/video/trailer.mp4"
              :class="{'animate-sheikah-glow':isLoading}" 
              class="w-full" 
              type="video/mp4"
              autoplay playsinline loop muted
            ></video>
          </div>
          <div class="hidden sm:flex items-center justify-center mt-10">
            <span v-for="letra in texto" :key="letra" class="translate font-hylian drop-shadow-blue-glow whitespace-pre text-lg"> {{letra}} </span>
          </div>
        </div>
      </div>
      <div class="mt-52 sm:mt-10">
        <img src="../assets/img/link_zelda.png" class="max-h-[650px] drop-shadow-golden-glow">
      </div>
    </div>
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
    translate(){
      let cli = 0;
      let nli = 0;

      let tl = gsap.timeline(); 

      for(cli = 0; cli < this.texto.length; cli++){
        
        let currentLetter = document.getElementsByClassName('translate')[cli]

        tl.to(currentLetter, {text: this.texto[cli] , duration: .008})
        
        tl.to(currentLetter, {text: this.texto[cli] , fontFamily: 'Roboto', duration: .008})

        for(nli = cli + 1; nli < this.texto.length; nli++){
          let nextLetter = document.getElementsByClassName('translate')[nli]
          if(nextLetter.innerHTML != ' '){
            tl.to(nextLetter, {text: this.makeHash(1), duration: .008})
          }
        }
      }
    },
    codify(){
      let cli = 0;
      let nli = 0;

      let tl = gsap.timeline(); 

      for(cli = 0; cli < this.texto.length; cli++){
        
        let currentLetter = document.getElementsByClassName('translate')[cli]

        tl.to(currentLetter, {text: this.texto[cli] , duration: .01})
        tl.to(currentLetter, {text: this.texto[cli] , fontFamily: 'Hylian', duration: .01})

        for(nli = cli + 1; nli < this.texto.length; nli++){
          let nextLetter = document.getElementsByClassName('translate')[nli]
          if(nextLetter.innerHTML != ' '){
            tl.to(nextLetter, {text: this.makeHash(1), duration: .01})
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
span{
  color: white;
} 
</style>
