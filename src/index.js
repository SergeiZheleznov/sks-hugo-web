import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import "./css/main.scss";

// hljs.initHighlightingOnLoad();

window.addEventListener('DOMContentLoaded', async (event) => {
    const { default: App } = await import(/* webpackChunkName: "app" */ './js/App');

    App.loadFontAwesome();
});