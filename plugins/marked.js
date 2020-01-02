import hljs from 'highlightjs';
import hljsDefineVue from 'highlightjs-vue';
import marked from 'marked';

const mark2html = () => {
  hljsDefineVue(hljs);
  return marked.setOptions({
    langPrefix: '',
    highlight(code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    }
  });
};

export default mark2html();
