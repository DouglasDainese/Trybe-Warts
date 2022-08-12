const loginButton = document.querySelector('#btn-Entrar');
const btnEnviar = document.getElementById('submit-btn');
const boxAcordo = document.getElementById('agreement');
const totalCaracteres = document.getElementById('textarea');
const contador = document.getElementById('counter');

function testLogin() {
  const emailInput = document.querySelector('#input-Email');
  const senhaInput = document.querySelector('#input-Senha');
  const email = emailInput.value;
  const senha = senhaInput.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', testLogin);
btnEnviar.disabled = true;

function habilitarBtn() {
  if (btnEnviar.disabled === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}
boxAcordo.addEventListener('click', habilitarBtn);

function contarCaracteres() {
  const caracteres = totalCaracteres.value.length;
  const caracteresRestante = 500 - caracteres;
  const resultado = parseInt(caracteresRestante, 10);
  contador.innerText = resultado;
}
contarCaracteres();
totalCaracteres.addEventListener('keyup', contarCaracteres);
