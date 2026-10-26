let user_info;
let pass_info;
let email_info;

const lista = ["aaa", "bbb", "ccc"];
const senhas = ["111", "222", "333"];
const nomes = ["Bruno", "Zuleica", "Herbert"];
const emails = ["b@b.com", "c@c.com", "d@d.com"]

function validarEmail(email) {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email);
}

function alerta(msg) {
  let aviso = document.getElementById("alerta");
  let caixa = document.getElementById("caixa_alerta");
  let mensagem = document.getElementById("msg_alerta");
  mensagem.textContent = msg;
  aviso.style.visibility = "visible";
  caixa.style.display = "block";
}

let fechar = document.getElementById("fechar_alerta");
let caixaAlerta = document.getElementById("alerta");

fechar.addEventListener("click", function () {
  caixaAlerta.style.visibility = "hidden";
});

function fazer_login() {
  user_info = document.getElementById("user").value;
  pass_info = document.getElementById("pass").value;
  email_info = document.getElementById("email").value;

  const userInput = document.getElementById("user");
  const passInput = document.getElementById("pass");
  const emailInput = document.getElementById("email");

  userInput.classList.remove("input-erro");
  passInput.classList.remove("input-erro");
  emailInput.classList.remove("input-erro");

  if (user_info.length === 0 || pass_info.length === 0 || email_info.length === 0) {
    alerta("Um dos seus campos está vazio!");
    userInput.classList.add("input-erro");
    passInput.classList.add("input-erro");
    emailInput.classList.add("input-erro");
  } else if (!validarEmail(email_info)) {
    alerta("O email que você digitou não está em um formato válido!");
    emailInput.classList.add("input-erro");
  } else if (
    lista.includes(user_info) &&
    senhas[lista.indexOf(user_info)] == pass_info &&
    emails[lista.indexOf(user_info)] == email_info
  ) {
    let mensagem = "Bem vindo, " + nomes[lista.indexOf(user_info)] + "! Seu email é " + email_info + " e está no formato válido!";
    alerta(mensagem);
  } else {
    alerta("Usuário, senha ou email inválido!");
    userInput.classList.add("input-erro");
    passInput.classList.add("input-erro");
    emailInput.classList.add("input-erro");
  }
}

let botao = document.getElementById("login");

botao.addEventListener("click", function () {
  fazer_login();
});