
const mobileHam = document.getElementById("mobile-ham");
const mobileNav = document.getElementById("mobile-nav");
mobileHam.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.classList.toggle("mobile-nav-toggle");
})