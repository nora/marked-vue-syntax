<template>
  <div class="container">
    <div v-html="markedHtml" class="marked"></div>
  </div>
</template>

<script>
import marked from '@/plugins/marked';

export default {
  data() {
    return {
      text: [
        '# Vue Syntax',
        '```vue',
        '<script>',
        '// Comment',
        'console.log(123)',
        '<\/script>', // eslint-disable-line no-useless-escape
        '```'
      ].join('\n')
    };
  },
  computed: {
    markedHtml() {
      return marked(this.text);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style src="highlightjs/styles/github-gist.css"></style>
