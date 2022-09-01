const toggle = document.querySelector("#toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
