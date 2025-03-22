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
document.addEventListener("DOMContentLoaded", () => {});
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

//scrool suave

const linksInternos = document.querySelectorAll('a[href^= "#"');
console.log(linksInternos);

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((item) => {
  item.addEventListener("click", scrollToSection);
});

//tracinho
document.addEventListener("DOMContentLoaded", () => {
  const tracinho = document.querySelector(".tracinho");

  // Espera a animação do título terminar
  setTimeout(() => {
    // Função para piscar o tracinho
    function piscarTracinho() {
      tracinho.classList.add("piscar");
      setTimeout(() => {
        tracinho.classList.remove("piscar");
      }, 500); // Tempo para o piscar
    }

    // Piscar quatro vezes
    for (let i = 0; i < 2; i++) {
      setTimeout(piscarTracinho, i * 1000); // Piscar a cada 1 segundo
    }
  }, 1000); // Tempo para a animação do título terminar
});
