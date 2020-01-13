import hljs from 'highlightjs';
import hljsDefineVue from 'highlightjs-vue';
import marked from 'marked';

const defineVue = () => new Promise(resolve => resolve(hljsDefineVue(hljs)));

const initMerked = async () => {
  await defineVue(hljs);
  return marked.setOptions({
    langPrefix: '',
    highlight(code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    }
  });
};

export default initMerked;
