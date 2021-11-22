<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="posts__item">
      <div class="posts__item-title">
        <h1 class="title">{{ post.name }}</h1>
      </div>
      <div class="posts__item-description">
        <p class="description">
          {{ post.description }}
        </p>
      </div>
      <div class="posts__item-icons">
        <div class="posts__item-icon" @click="locationPost(post.id)">
          <img class="icon" src="../static/comment.png" />
        </div>

        <div class="posts__item-icon" @click="addLike(post)">
          <p class="posts__item-like">{{ post.likes }}</p>
          <img class="icon" src="../static/like.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from '../database/database'
export default {
  data: () => ({
    posts,
  }),
  methods: {
    addLike(post) {
      post.likes++
    },
    locationPost(id) {
      this.$router.push('/post/' + id)
    },
  },
}
</script>
