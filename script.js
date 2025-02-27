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


//accordion list

const listAccordion = document.querySelectorAll('.accordion-list dt');

listAccordion[0].classList.add('ativo');
listAccordion[0].nextElementSibling.classList.add('ativo');

function  iniciarAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}


listAccordion.forEach((item) => {
  item.addEventListener('click', iniciarAccordion);
});
