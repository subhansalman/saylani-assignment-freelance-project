// ========== NAVBAR TOGGLE ==========
const menuBtnmain = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtnmain.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ========== CLOSE MENU WHEN LINK CLICK ==========
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ========== MAKE HEADER CHANGE ON SCROLL ==========
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ========== SMOOTH SCROLL (OPTIONAL) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});







// ===================== FAQ ACCORDION =====================
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;

        // close other opened FAQs
        document.querySelectorAll(".faq-item p").forEach(p => {
            if (p !== answer) {
                p.style.display = "none";
            }
        });

        // toggle current selected FAQ
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});


// ===================== SMOOTH SCROLL =====================
const allLinks = document.querySelectorAll("a, button");

allLinks.forEach(btn => {
    btn.addEventListener("click", function (e) {
        const target = this.getAttribute("href");

        if (target && target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===================== BUTTON CLICK ACTIONS =====================
const hireBtn = document.querySelector(".btn");
const learnBtn = document.querySelector(".btn-outline");

hireBtn.addEventListener("click", () => {
    alert("Thank you for choosing our service!");
});

learnBtn.addEventListener("click", () => {
    document.querySelector(".services").scrollIntoView({
        behavior: "smooth"
    });
});


// ===================== OPTIONAL MOBILE MENU (Future use) =====================
const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}


// ===================== SCROLL EFFECTS (OPTIONAL BONUS) =====================
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
