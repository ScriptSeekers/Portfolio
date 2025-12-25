// Simple scroll reveal (clean, no libraries)
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


function openCenteredWindow(url) {
    const width = 320;
    const height = 590;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    window.open(
        url,
        "certificatePopup",
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
}

function googleSearch(query) {
  if (!query || !query.trim()) return;

  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, "_blank");
}