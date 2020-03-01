import "./css/main.scss";

window.addEventListener('DOMContentLoaded', async (event) => {
    const { default: App } = await import(/* webpackChunkName: "app" */ './js/App');

    App.loadHighlighting();
});