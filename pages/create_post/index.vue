<template>
  <div>
    <h1>Создание поста</h1>
    <div class="editor">
      <Editor :blog-content="editorContent" @contentChanged="onChange" />
    </div>
  </div>
</template>
<script>
import Editor from '~/components/Editor.vue'
export default {
  data: () => ({
    editorContent: {},
  }),
  components: { Editor },
  methods: {
    onChange(data) {
      console.log('component content was changed...')
      this.editorContent = data
    },
  },
}
</script>