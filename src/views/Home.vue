<template>
  <div class="home">
    <Welcome/>
    <Comments/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/modules/Welcome.vue'
import Comments from '@/modules/Comments.vue'
import Footer from '@/modules/Footer.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    Comments,
    Footer
  }
}
</script>
