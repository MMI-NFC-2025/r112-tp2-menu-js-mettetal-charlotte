const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector(".menu")
const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
toggle.addEventListener('click', () => {
    nav.classList.toggle('menu--open');
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
    toggle.addEventListener('click', () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
        nav.ariaHidden = "true";
        toggle.ariaExpanded = "false";
    });
});