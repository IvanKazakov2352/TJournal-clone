<template>
  <div class="sidebar">
    <div class="sidebar__links">
      <input
        v-if="input"
        class="sidebar__links-input"
        type="text"
        placeholder="Поиск"
      />
      <nuxt-link tag="div" to="/" no-prefetch>
        <div class="sidebar__links-link">
          <div class="sidebar__links-image">
            <img class="link-image" src="../static/popularity.png" />
          </div>
          <div class="sidebar__links-text">
            <p>Популярные</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/" no-prefetch>
        <div class="sidebar__links-link">
          <div class="sidebar__links-image">
            <img class="link-image" src="../static/hourglass.png" />
          </div>
          <div class="sidebar__links-text">
            <p>Свежее</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/messages" no-prefetch>
        <div class="sidebar__links-link">
          <div class="sidebar__links-image">
            <img class="link-image" src="../static/chat-box.png" />
          </div>
          <div class="sidebar__links-text">
            <p>Сообщения</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/rating" no-prefetch>
        <div class="sidebar__links-link">
          <div class="sidebar__links-image">
            <img class="link-image" src="../static/star.png" />
          </div>
          <div class="sidebar__links-text">
            <p>Рейтинг</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/create_post" no-prefetch>
        <button class="sidebar__links-button">Новая запись</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    input: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
