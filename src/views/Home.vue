<template>
  <div id="Home" class="max-w-[1440px] my-0 mx-auto">
    <nav-bar></nav-bar>
    <video
      id="video-background" 
      src="../assets/video/zelda-botw-bg.mp4"
      :class="{'animate-sheikah-glow':isLoading}" 
      class="fixed top-0 left-0 right-0 bottom-0 z-[-1] min-w-full min-h-full object-cover" 
      type="video/mp4"
      playsinline loop muted
    ></video>
    <div class="flex flex-col-reverse lg:flex-row justify-center items-center mt-6">
      <div class="flex flex-col gap-10">
        <p class="drop-shadow-blue-glow font-roboto text-white italic text-[28px] text-center">
          "May the goddess smile upon you"
        </p>
        <div class="relative max-w-[300px] my-0 mx-auto ">
          <img 
            src="../assets/img/sheikah_frame.png"
            class="max-w-[300px] absolute z-10 hover:drop-shadow-blue-glow cursor-pointer transition-all"
            @mouseenter="changeFont(true, 'trailerText')"
            @mouseout="changeFont(false, 'trailerText')"
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
        <div class="relative w-full">
          <div class="flex items-center justify-center">
            <span v-for="letter in trailerText" :key="letter" class="translate-trailer font-sheikah drop-shadow-blue-glow whitespace-pre text-md text-white"> {{letter}} </span>
          </div>
        </div>
        <div 
          class="flex items-center justify-center border-[3px] border-golden-50 rounded-md mx-auto my-0 bg-sheikah-blue w-44 h-16"
          @mouseenter="changeFont(true, 'buttonText')"
          @mouseout="changeFont(false, 'buttonText')"
        >
          <span v-for="letter in buttonText" :key="letter" class="translate-button font-sheikah drop-shadow-blue-glow whitespace-pre text-md text-white"> {{letter}} </span>
        </div>
      </div>
      <div class="relative">
        <img src="../assets/img/link-logo.png" class="relative bottom-16 left-[18px] w-[888px] h-auto">
        <img src="../assets/svg/switch-logo.svg" class="absolute right-0 bottom-20 h-9">
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import gsap from '../helpers/gsap'

export default {
  components: { NavBar },
  name: 'Home',
  data: () => ({
    tl: gsap.timeline(),
    trailerText: 'Watch the full trailer',
    buttonText: 'Buy now!'
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
    changeFont(translate, location){

      let currentLetterIndex = 0;
      let nextLetterIndex = 0;

      let tl = gsap.timeline();

      let element = location == 'buttonText' ? 'translate-button' : 'translate-trailer'

      console.log(element)
      console.log(location)

      for(currentLetterIndex = 0; currentLetterIndex < this[location].length; currentLetterIndex++){
        
        let currentLetter = document.getElementsByClassName(element)[currentLetterIndex]

        if(translate){

          tl.to(currentLetter, {text: this[location][currentLetterIndex] , duration: .02})
          
          tl.to(currentLetter, {text: this[location][currentLetterIndex] , fontFamily: 'Hylian', duration: .02})

        } else {

          tl.to(currentLetter, {text: this[location][currentLetterIndex] , duration: .01})

          tl.to(currentLetter, {text: this[location][currentLetterIndex] , fontFamily: 'Sheikah', duration: .01})

        }

        for(nextLetterIndex = currentLetterIndex + 1; nextLetterIndex < this[location].length; nextLetterIndex++){
          let nextLetter = document.getElementsByClassName(element)[nextLetterIndex]
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
