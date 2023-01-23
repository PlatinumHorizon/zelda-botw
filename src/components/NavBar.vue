<template>
  <div id="nav-bar" class="relative mx-16 mt-8 bg-sheikah-blue rounded-full border-[3px] border-golden-50 px-12 py-2">
    <div class="flex justify-between items-center relative z-10">
      <div class="flex gap-10">
        <div v-for="item in items" :key="item.title" class="flex items-center gap-1 cursor-pointer transition-all duration-500 hover:gap-5 hover:drop-shadow-blue-glow" @click="navigate">
          <div>
            <img src="../assets/svg/left-arrow.svg" class="h-2">
          </div>
          <div class="font-hylian text-3xl text-white">
            {{ item.title }}
          </div>
          <div>
            <img src="../assets/svg/right-arrow.svg" class="h-2">
          </div>
        </div>
      </div>
      <div class="flex gap-6">
        <div v-for="socialMedia in contact" :key="socialMedia.vector" class="transition-all duration-500 hover:drop-shadow-blue-glow hover:translate-y-[-3px]">
          <a :href="socialMedia.link" target="_blank">
            <img :src="socialMedia.vector" class=" h-7">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
			items: [
				{
          title:'Home',
          anchorLocation: '#home'
        },
        {
          title:'Story',
          anchorLocation: '#home'
        },
        {
          title:'Wallpapers',
          anchorLocation: '#home'
        },
			],
      contact: [
        {
          vector: require('../assets/svg/linkedin.svg'),
          link: 'https://www.linkedin.com/in/gabriel-fernandez-xavier-2758aa185/'
        },
        {
          vector: require('../assets/svg/facebook.svg'),
          link: 'https://www.facebook.com/gabriel.fernandez.90857901'
        },
        {
          vector: require('../assets/svg/instagram.svg'),
          link: 'https://www.instagram.com/gfzxavier/'
        },
        {
          vector: require('../assets/svg/youtube.svg'),
          link: 'https://www.youtube.com/channel/UC7CakzAyIR3TSisNGRUiP1A'
        }
      ]
    }
  },
  methods: {
    navigate(){
      this.$store.commit('changeLoading')
      setTimeout(() => {
        this.$store.commit('changeLoading')
      }, 2500)
    }
  }
}
</script>