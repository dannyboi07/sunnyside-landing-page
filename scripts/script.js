
const mobileHam = document.getElementById("mobile-ham");
const mobileNav = document.getElementById("mobile-nav");

let timer = null;
mobileHam.addEventListener("click", (e) => {
    e.preventDefault();

    if (timer) clearTimeout(timer);
    if (mobileNav.classList.contains("mobile-nav-toggle")) {
        mobileNav.classList.remove("mobile-nav-toggle");

        timer = setTimeout(() => {
            mobileNav.style.display = "none";
        }, 250);
    } 
    else {
        mobileNav.style.display = "block";

        setTimeout(() => {
            mobileNav.classList.add("mobile-nav-toggle");
        }, 0);
    };
});