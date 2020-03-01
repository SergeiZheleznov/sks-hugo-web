import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';


export default {
    loadHighlighting: () => {
        hljs.registerLanguage('javascript', javascript);
        hljs.initHighlightingOnLoad();
    },
};