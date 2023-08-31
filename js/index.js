const themeBtn = document.querySelector(".theme-btn");
// const themes = [
//   {
//     name: "light",
//     icon: "☀️",
//   },
//   {
//     name: "dark",
//     icon: "🌙",
//   },
// ];

function setTheme(theme) {
  if (theme === "dark") {
    themeBtn.textContent = "🌙";
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "☀️";
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function initTheme() {
  const theme = localStorage.getItem("theme");
  setTheme(theme);
}

initTheme();

themeBtn.addEventListener("click", toggleTheme);
