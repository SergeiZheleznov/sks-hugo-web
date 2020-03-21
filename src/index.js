import "./css/main.scss";

window.addEventListener('DOMContentLoaded', async (event) => {
    const { default: App } = await require(/* webpackChunkName: "app" */ './js/App');

    App.loadFontAwesome();
});