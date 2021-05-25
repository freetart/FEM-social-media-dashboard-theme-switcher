"use strict";

const changeTheme = () => {
  const checkbox = document.getElementById("theme-toggle__checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
};
changeTheme();

const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();
