// The banner autoplays; stop it for anyone who asked for less motion.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const banner = document.querySelector(".banner");

function syncBanner() {
    if (!banner) return;
    if (reduceMotion.matches) banner.pause();
    else banner.play().catch(() => {});
}

reduceMotion.addEventListener("change", syncBanner);
syncBanner();
