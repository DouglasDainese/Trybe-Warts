const loginButton = document.querySelector('#btn-Entrar');
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
