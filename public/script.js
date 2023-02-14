let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

let header = document.querySelector("#header");
let close = document.getElementById("close-head");
header.onclick = () => {
  header.classList.remove("head");
  document.getElementById("header").style.display = "none";
  document.getElementById("navbarHeader").style.top = "0";

  close.classList.remove("fa-times");
};

// window.addEventListener("scroll", function () {
//   let nav = document.querySelector("#navbarHeader");
//   nav.classList.toggle("sticky", window.scrollY > 0);
// });

function darkMode() {
  let setTheme = document.body;

  setTheme.classList.toggle("dark-mode-style");

  let theme;

  if (setTheme.classList.contains("dark-mode-style")) {
    theme = "DARK";
  } else {
    console.log("light mode");
    theme = "LIGHT";
  }

  // save to localStorage
  localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
console.log(getTheme);

if (getTheme === "DARK") {
  document.body.classList = "dark-mode-style";
}
