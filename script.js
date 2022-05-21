// sticky navbar when scroll

const top_link = document.querySelector(".top-link");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);
function fixNav() {
  const height_page = window.pageYOffset;
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }

  if (height_page > 578) {
    top_link.classList.add("show-top-link");
  } else {
    top_link.classList.remove("show-top-link");
  }
}

// toggle btn

const toggle_btn = document.querySelector(".btn");
const links = document.querySelector(".links");

toggle_btn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// change theme color

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

const themes = document.querySelectorAll(".theme-dot");

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    const mode = e.currentTarget.dataset.mode;

    setTheme(mode);
  });
});

function setTheme(mode) {
  if (mode === "light") {
    document.querySelector(".theme-style").href = "style.css";
  }

  if (mode === "blue") {
    document.querySelector(".theme-style").href = "blue.css";
  }

  if (mode === "green") {
    document.querySelector(".theme-style").href = "green.css";
  }

  if (mode === "purple") {
    document.querySelector(".theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

// date

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// scroll LINKS

const scrollLinks = document.querySelectorAll(".scroll");
const links_container = document.querySelector(".links-container");

scrollLinks.forEach((scroll) => {
  scroll.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
