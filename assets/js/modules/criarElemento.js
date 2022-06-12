export default class CriaElemento {
   #btnFazerPegunta;
   #respostas;
   #elementoResposta;
   #inputPergunta;

   constructor(btnFazerPegunta, elementoResposta, inputPergunta, arrayRespostas) {
      this.#btnFazerPegunta = document.querySelector(btnFazerPegunta);
      this.#elementoResposta = document.querySelector(elementoResposta);
      this.#inputPergunta = document.querySelector(inputPergunta);
      this.#respostas = arrayRespostas;
   }

   #gerarNumeroAleatorio() {
      const totalResposta = this.#respostas.length;
      const numeroAleatorio = Math.floor(Math.random() * totalResposta);
      return numeroAleatorio;
   }

   get #showMessage() {
      const numeroAleatorio = this.#gerarNumeroAleatorio();
      this.#elementoResposta.innerHTML = this.#respostas[numeroAleatorio];
   }

   #criaMensagemDeErro(campo, mensagem) {
      const span = document.createElement('span');
      campo.setAttribute('class', 'error');
      span.setAttribute('class', 'msg-error erro');
      span.innerHTML = mensagem;
      campo.parentNode.classList.add('error');
      campo.parentNode.insertBefore(span, campo.nextSibling);
   }

   #fazerPergunta() {
      //TODO - remover mensagens de erros
      let mensagemDeErro = this.#inputPergunta.parentNode.querySelectorAll('.erro');
      let input = this.#inputPergunta.parentNode.querySelector('.error');

      for (let errorText of mensagemDeErro) {
         errorText.remove();
      }
      if (this.#inputPergunta.value === '') {
         this.#criaMensagemDeErro(this.#inputPergunta, 'Por favor, digite uma pergunta!');
         return;
      }
      input.classList.remove('error');
      this.#showMessage;
   }

   handleClick() {
      this.#btnFazerPegunta.addEventListener('click', () => {
         this.#fazerPergunta();
      });
   }
}
