document.getElementById("bola").addEventListener("click", function() {
    moverParaPosicaoAleatoria();
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
