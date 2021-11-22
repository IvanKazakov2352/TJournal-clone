<template>
  <div>
    <Navbar
    @openSidebar="sidebar = !sidebar"
    @showInput="showInput = !showInput"
    />
    <div class="layout">
      <Sidebar v-if="sidebar" :input="showInput" />
      <div class="layout-center">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
const Navbar = () => import('../components/Navbar')
const Sidebar = () => import('../components/Sidebar.vue')
export default {
  data: () => ({
    sidebar: false,
    showInput: false
  }),
  components: {
    Navbar,
    Sidebar,
  },
}
</script>
