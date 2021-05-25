"use strict";

const changeTheme = () => {
  const checkbox = document.getElementById("theme-toggle__checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
};
changeTheme();
