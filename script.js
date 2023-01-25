const caracteres = '1234567890-=qwertyuiop´[asdfghjklç~]zxcvbnm,.;/!@#$%¨&*()_+QWERTYUIOP`{ASDFGHJKLÇ^}|ZXCVBNM<>:?';
const inputCaracteres = document.querySelector('#gerar-senha');
const inputSenhaGerada = document.querySelector('#senha-gerada');
const btnGerarSenha = document.querySelector('#click-gerar');
const mensagemDeErro = document.querySelector('#error-message');
let senha;

const gerarSenha = () => {
  senha = '';

  if (!inputCaracteres.value) {
    alert('Você precisa adicionar a quantidade de caracteres');
    return
  }

  if (inputCaracteres.value > 40) {
    inputCaracteres.value = 40;
    mensagemDeErro.innerText = 'O máximo de caracteres que podem ser gerados é 40.';
    setTimeout(() => {
      mensagemDeErro.innerText = ''
    }, 4000);
  } else if (inputCaracteres.value < 7) {
    inputCaracteres.value = 7;
    mensagemDeErro.innerText = 'O mínimo de caracteres que podem ser gerados é 7.';
    setTimeout(() => {
      mensagemDeErro.innerText = ''
    }, 4000);
  }

  
  for (let index = 0; index < inputCaracteres.value; index += 1) {
    let stringAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.substring(stringAleatorio, stringAleatorio + 1);
  }

  inputSenhaGerada.value = senha; 
}

btnGerarSenha.addEventListener('click', gerarSenha)

