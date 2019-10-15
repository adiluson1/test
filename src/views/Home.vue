<template>
  <div class="home">
    <Welcome/>
    <Comments/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/modules/Welcome.vue'
import Comments from '@/modules/Comments.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    Comments
  }
}
</script>
