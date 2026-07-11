console.log(
    '%cHey, curious one — thanks for digging into the source. Stay a while. ☕🍀',
    'font-size: 1.5rem; margin: 0 0 1rem 0; padding: 1rem; color: #f3e2cf; background-color: #241a24; border-radius: 0.5rem;',
);

const footerDate = document.getElementById('footer-date');
if (footerDate) {
    const updated = new Date(document.lastModified);
    const formatted = updated
        .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        .toLowerCase();
    footerDate.textContent = formatted;
}

// Drift the hills slightly as the page scrolls.
const hills = document.getElementById('parallax-hills');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hills && !prefersReducedMotion) {
    let ticking = false;

    const updateParallax = () => {
        const y = window.scrollY;
        hills.style.transform = `translateY(${Math.min(y * 0.08, 60)}px)`;
        ticking = false;
    };

    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        },
        { passive: true },
    );
}
