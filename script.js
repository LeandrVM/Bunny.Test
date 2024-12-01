
document.getElementById("bola").addEventListener("click", function () {
  // Primeiramente, troca o GIF para "Clique" com um tamanho e deslocamento em Y especificado
  alterarGif("/Gifs/Clique.gif", 1.6, 10); // Exemplo de escala e deslocamento Y para o GIF "Clique"
  play(); // Toca a música dependendo do número aleatório gerado
  // Quando o GIF "Clique" terminar, troca para "Sumir"
  setTimeout(function () {
    alterarGif("/Gifs/Sumir.gif", 0.6, 15); // Exemplo de escala e deslocamento Y para o GIF "Sumir"
    playsom();
    // Quando o GIF "Sumir" terminar, faz o movimento
    setTimeout(function () {
      moverParaPosicaoAleatoria(); // Move o GIF para uma nova posição

      // Depois de mover, mostra o GIF "Aparecer" com outro tamanho e deslocamento Y
      setTimeout(function () {
        alterarGif("/Gifs/Aparecer.gif", 1.5, 20); // Exemplo de escala e deslocamento Y para o GIF "Aparecer"

        // Após 0.5 segundos, retorna para o GIF "Parado"
        setTimeout(function () {
          alterarGif("/Gifs/Parado.gif", 1.6, 10); // Volta ao tamanho original e sem deslocamento no GIF "Parado"
        }, 500); // Tempo de exibição do "Aparecer"
      }, 100); // Atraso após o movimento antes de exibir o "Aparecer"
    }, 100); // Ajuste o tempo conforme a duração do "Sumir.gif"
  }, 300); // Ajuste o tempo conforme a duração do "Clique.gif"
});

document.getElementById("bola").addEventListener("mouseenter", function () {
  alterarGif("/Gifs/Mouse.gif", 1, 0); // Aumenta a escala e desce um pouco para o GIF "mouse"
  if (alterarGif) {
    alterarTransformacao(1.6, 20);
  } // Aumenta a escala e desce um pouco
});

document.getElementById("bola").addEventListener("mouseleave", function () {
  // Verifica se o GIF atual não é o "mouse"
  const gifAtual = document.getElementById("gif").src;
  if (gifAtual.includes("/Gifs/Mouse.gif")) {
    alterarGif("/Gifs/Parado.gif", 1, 10); // Volta ao tamanho original e sem deslocamento no GIF "Parado"
    if (alterarGif) {
      alterarTransformacao(1.6, 10);
    } // Volta ao tamanho e posição originais
  }
});

function moverParaPosicaoAleatoria() {
  // Obtendo o tamanho da tela
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;

  // Definindo a largura e altura do gif (precisa estar de acordo com o tamanho do seu gif)
  const larguraGif = document.getElementById("gif").width;
  const alturaGif = document.getElementById("gif").height;

  // Calculando posições aleatórias dentro da tela, com margem para o gif
  const novaPosicaoX = Math.random() * (larguraTela - larguraGif);
  const novaPosicaoY = Math.random() * (alturaTela - alturaGif);

  // Movendo o gif para a nova posição
  const gifContainer = document.getElementById("gif-container");
  gifContainer.style.left = novaPosicaoX + "px";
  gifContainer.style.top = novaPosicaoY + "px";
}

function alterarGif(novoSrc, escala, deslocamentoY) {
  const gif = document.getElementById("gif");
  gif.src = novoSrc;
  alterarTransformacao(escala, deslocamentoY); // Aplica a transformação de escala e deslocamento Y
}

function alterarTransformacao(escala, deslocamentoY) {
  const gif = document.getElementById("gif");
  gif.style.transform = `scale(${escala}) translateY(${deslocamentoY}px)`; // Altera a posição Y também
}

// Função para escolher um número aleatório entre 1 e 3 e tocar a música correspondente
function play() {
  var numeroAleatorio = Math.floor(Math.random() * 3) + 1; // Gera um número aleatório entre 1 e 3
  var audio;

  // Seleciona o arquivo de áudio dependendo do número aleatório
  switch (numeroAleatorio) {
    case 1:
      audio = new Audio("Som/Bunny01.mp3"); // Substitua pelo caminho da sua música
      break;
    case 2:
      audio = new Audio("Som/Bunny02.mp3"); // Substitua pelo caminho da sua música
      break;
    case 3:
      audio = new Audio("Som/Bunny03.mp3"); // Substitua pelo caminho da sua música
      break;
  }

  audio.play(); // Toca o áudio selecionado
}

function playsom() {
  var audio = new Audio("Som/Pop.mp3");
  audio.play();
}
