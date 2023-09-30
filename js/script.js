"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".header_hamburger"),
          menu = document.querySelector(".header_menu");

    btn.addEventListener("click", e => {
        menu.classList.toggle("header_menu_active");
        btn.classList.toggle("header_hamburger_active");
    });
});
