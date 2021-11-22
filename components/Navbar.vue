<template>
  <div class="navbar">
    <div class="navbar__left-block">
      <img
        class="navbar__left-block-icon"
        src="../static/hamburger.png"
        @click="openSidebar"
      />
      <img class="navbar__left-block-image" src="../static/journal.png" />
      <input class="navbar__left-block-input" type="text" placeholder="Поиск" v-model="search" @keyup.enter="searchNews" />
      <nuxt-link tag="div" to="/create_post" no-prefetch>
        <button class="navbar__left-block-button">Новая запись</button>
      </nuxt-link>
    </div>
    <div class="navbar__right-block">
      <div class="navbar__image-seacrh">
        <img
          class="navbar__image-item-search"
          src="../static/search.png"
          @click="showInputSidebar"
        />
      </div>
      <div class="navbar__image">
        <img class="navbar__image-item" src="../static/comment.png" />
      </div>
      <div class="navbar__image">
        <img class="navbar__image-item" src="../static/notify.png" />
      </div>
      <div class="navbar__avatar">
        <img class="navbar__avatar-item" src="../static/profile.png" />
      </div>
      <div class="navbar__image">
        <img
          class="navbar__image-item"
          src="../static/arrow-down-sign-to-navigate.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputShow: false,
    search: ""
  }),
  methods: {
    showInputSidebar() {
      this.$emit('showInput')
    },
    openSidebar() {
      this.$emit('openSidebar')
    },
    searchNews() {
      this.$router.push({name: 'search_news', query: {result: this.search}})
    }
  },
}
</script>
