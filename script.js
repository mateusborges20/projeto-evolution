// Selecionar elementos
const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.getElementById("menuLateral");
const closeMenu = document.getElementById("closeMenu");

// Abrir o menu lateral ao clicar no botão hambúrguer
menuToggle.addEventListener("click", () => {
  menuLateral.classList.add("open");
});

// Fechar o menu lateral ao clicar no botão "X"
closeMenu.addEventListener("click", () => {
  menuLateral.classList.remove("open");
});

// Fechar o menu lateral ao clicar em um link
const menuLinks = document.querySelectorAll(".menu-lateral a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLateral.classList.remove("open");
  });
});

//carrosel
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let autoSlide;

function showSlide() {
  index = (index + items.length) % items.length;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index++;
  showSlide();
  resetAutoSlide();
}

function prevSlide() {
  index--;
  showSlide();
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
autoSlide = setInterval(nextSlide, 3000);
