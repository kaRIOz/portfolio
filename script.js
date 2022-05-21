// sticky navbar when scroll

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 598) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
});

// toggle btn

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle('show-links')

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
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
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);

    let element = document.getElementById(id);
    // calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    // console.log(position);
    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 85) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
