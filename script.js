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

// Função para limpar os campos
function limpar() {
  const inputs = document.querySelectorAll(".inputs-item input");
  const textarea = document.querySelector("textarea");
  inputs.forEach((input) => {
    input.value = "";
  });
  textarea.value = "";
}

// Função para limpar os campos
function limpar() {
  const inputs = document.querySelectorAll(".inputs-item input");
  const textarea = document.querySelector("textarea");
  inputs.forEach((input) => {
    input.value = "";
  });
  textarea.value = "";
}

// Função para exibir a mensagem de sucesso
function exibirMensagemSucesso() {
  const mensagem = document.getElementById("mensagemSucesso");
  mensagem.style.display = "block"; // Mostra a mensagem
}

// Função para limpar os campos
function limpar() {
  const inputs = document.querySelectorAll(".inputs-item input");
  const textarea = document.querySelector("textarea");
  inputs.forEach((input) => {
    input.value = "";
  });
  textarea.value = "";
}

// Função para exibir a mensagem de sucesso
function exibirMensagemSucesso() {
  const mensagem = document.getElementById("mensagemSucesso");
  mensagem.style.display = "block"; // Mostra a mensagem

  // Oculta a mensagem após 5 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 5000); // 5000ms = 5 segundos
}

// Função para enviar o formulário
function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Simula o envio do formulário
  fetch(event.target.action, {
    method: event.target.method,
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        limpar(); // Limpa os campos após o envio
        exibirMensagemSucesso(); // Exibe a mensagem de sucesso
      } else {
        console.log("Erro ao enviar o formulário.");
      }
    })
    .catch((error) => {
      console.log("Erro ao enviar o formulário:", error);
    });
}

// Adiciona o evento de submit ao formulário
document
  .getElementById("meuFormulario")
  .addEventListener("submit", enviarFormulario);
