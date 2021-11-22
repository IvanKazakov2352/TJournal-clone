<template>
  <div class="post">
    <h1>{{this.$route.params.id}}</h1>
  </div>
</template>
<script>
import { posts } from '../../database/database'
export default {
  data: () => ({
    posts,
  }),
  computed: {
    post() {
      return posts.find((p) => p.id === this.$route.params.id)
    },
  },
}
</script>