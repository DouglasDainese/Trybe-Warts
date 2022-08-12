const loginButton = document.querySelector('#btn-Entrar');
const btnenviar = document.getElementById('submit-btn');
const boxacordo = document.getElementById('agreement');
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
btnenviar.disabled = true;

console.log(boxacordo);
function habilitarbtn() {
  if (btnenviar.disabled === true) {
    btnenviar.disabled = false;
  } else {
    btnenviar.disabled = true;
  }
}

boxacordo.addEventListener('click', habilitarbtn);
