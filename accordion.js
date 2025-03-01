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


//accordion -list
const accordionList = document.querySelectorAll('.accordion-list dt');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');
function  activeAcordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAcordion);
})


//scrool suave.

const linksInternos = document.querySelectorAll('a[href^= "#"');
console.log(linksInternos);


function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  
  const section = document.querySelector(href);
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  
}


linksInternos.forEach((item) => {
  item.addEventListener('click', scrollToSection)
})