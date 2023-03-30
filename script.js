import { imgs } from "/img/img.js";
let senhaVisivel = false
let versenhaImg = document.getElementById('versenha-img')
let varsenhaInput = document.getElementById('input-senha')
let valorSenhaInput = document.getElementById("password-input")
document.cookie = "entrou=true"

export function versenhaF() {
  let inputValue = document.getElementById('password-input').value
  if (senhaVisivel == false) {
    varsenhaInput.innerHTML = `<input type='text' id='password-input' value='${inputValue}'>`
    versenhaImg.innerHTML = "<img src='img/versenha-sim.svg' id='versenha-img'>"
    senhaVisivel = true;
  } else {
    varsenhaInput.innerHTML = `<input type='password' id='password-input' value='${inputValue}'>`
    versenhaImg.innerHTML = "<img src='img/versenha-nao.svg' id='versenha-img'>"
    senhaVisivel = false;
  }
}

const cookieEntrar = document.cookie.split(";").find(c => c.includes("entrar="));
if (cookieEntrar) {
  const valorDoCookie = cookieEntrar.split("=")[1];
  if (valorDoCookie === "true") {
    console.log("está true");
  } else {
    console.log("está falso");
  }
}

export function entrar() {
  if (valorSenhaInput.value == imgs) {
    console.log(valorSenhaInput.value)
    console.log('entrou, yay!!!')
  } else if(valorSenhaInput.value != imgs) {
    console.log(valorSenhaInput.value)
    console.log('not now, not today.')
  }
}