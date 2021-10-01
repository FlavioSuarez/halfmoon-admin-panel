import halfmoon from "~/node_modules/halfmoon/js/halfmoon-module.js";

window.addEventListener("DOMContentLoaded", () => {
    halfmoon.onDOMContentLoaded();

    const back = document.getElementById("back");
    if(back != null) {
        back.addEventListener("click", (event) => {
            event.preventDefault();
            window.history.go(-1);
        });
    }

    const sidebar = document.getElementById("sidebar");
    if(sidebar != null) {
        sidebar.addEventListener("click", () => {
            halfmoon.toggleSidebar();
        });
    }
});