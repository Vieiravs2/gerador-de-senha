const caracteres = '1234567890-=qwertyuiop´[asdfghjklç~]zxcvbnm,.;/!@#$%¨&*()_+QWERTYUIOP`{ASDFGHJKLÇ^}|ZXCVBNM<>:?';
const inputCaracteres = document.querySelector('#gerar-senha');
const inputSenhaGerada = document.querySelector('#senha-gerada');
const btnGerarSenha = document.querySelector('#click-gerar');
let senha;

const gerarSenha = () => {
  senha = ''

  if (!inputCaracteres.value) {
    alert('Você precisa adicionar a quantidade de caracteres')
    return
  }
  
  for (let index = 0; index < inputCaracteres.value; index += 1) {
    let stringAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.substring(stringAleatorio, stringAleatorio + 1);
  }

  inputSenhaGerada.value = senha; 
}

btnGerarSenha.addEventListener('click', gerarSenha)

