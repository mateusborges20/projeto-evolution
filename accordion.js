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
const accordionList = document.querySelectorAll(".accordion-list dt");
accordionList[0].classList.add("ativo");
accordionList[0].nextElementSibling.classList.add("ativo");
function activeAcordion() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

accordionList.forEach((item) => {
  item.addEventListener("click", activeAcordion);
});

//scrool suave.

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

const sections = document.querySelectorAll("section");
const windowMetade = window.innerHeight * 0.8;

function animaScroll() {
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;

    if (isSectionVisible) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}

// Otimiza a animação com requestAnimationFrame
function debounce(func, wait = 10) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener("scroll", debounce(animaScroll));
animaScroll(); // Executa a função ao carregar a página
