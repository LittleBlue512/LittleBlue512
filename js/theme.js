const THEME_KEY = "theme";
const DEFAULT_THEME = "light";

const themes = {
  dark: {
    emoji: "🌙",
    "--text-color": "#f8fafc",
    "--background-color": "#1e293b",
  },
  light: {
    emoji: "☀️",
    "--text-color": "#1e293b",
    "--background-color": "#f8fafc",
  },
};

function setTheme(theme) {
  // Update CSS variables
  const currentTheme = themes[theme];
  Object.keys(currentTheme).forEach((key) => {
    document.documentElement.style.setProperty(key, currentTheme[key]);
  });
  // Update theme button
  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.innerHTML = themes[theme].emoji;
  }
}

// Run when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme button
  const theme = localStorage.getItem(THEME_KEY);
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.innerHTML = themes[theme].emoji;
  themeBtn.addEventListener("click", () => {
    // Toggle theme between light and dark
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === "dark") {
      localStorage.setItem(THEME_KEY, "light");
      setTheme("light");
    } else {
      localStorage.setItem(THEME_KEY, "dark");
      setTheme("dark");
    }
  });
});

// Initialize theme
const theme = localStorage.getItem(THEME_KEY);
if (theme === null) {
  localStorage.setItem(THEME_KEY, DEFAULT_THEME);
  setTheme(DEFAULT_THEME);
} else {
  setTheme(theme);
}
