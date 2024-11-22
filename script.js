// Função para exibir texto no cubo
function exibirTexto(texto) {
    const textoElement = document.createElement('div');
    textoElement.textContent = texto;
    textoElement.classList.add('texto-exibido');
    document.body.appendChild(textoElement);

    // Esconder o texto após 3 segundos
    setTimeout(() => {
        textoElement.remove();
    }, 3000); // Tempo de exibição do texto (3 segundos)
}

// Função para trocar a posição dos cubos
document.getElementById("botao").addEventListener("click", function() {
    const cubo1Container = document.getElementById("cubo1-container");
    const cubo2Container = document.getElementById("cubo2-container");
    const cubo1 = document.getElementById("cubo1");
    const cubo2 = document.getElementById("cubo2");
    const botao1 = cubo1.querySelector(".btn-cubo");
    const botao2 = cubo2.querySelector(".btn-cubo-topo");

    // Esmaecer o cubo que está por cima e também desabilitar e esconder o botão correspondente
    if (cubo1.style.zIndex == 2) {
        cubo1Container.style.opacity = 0;
        cubo1Container.style.pointerEvents = 'none'; // Não interagir com o cubo1 enquanto esmaece
        botao1.style.display = 'none'; // Esconder o botão do cubo1
        setTimeout(() => {
            // Depois que o cubo1 esmaecer, mover ele para trás
            cubo1.style.zIndex = 0;
            cubo2.style.zIndex = 2;
            cubo1Container.style.opacity = 1;
            cubo1Container.style.pointerEvents = 'auto';
            botao1.style.display = 'block'; // Mostrar o botão do cubo1 novamente
        }, 1000); // Tempo do esmaecimento (1 segundo)
    } else {
        cubo2Container.style.opacity = 0;
        cubo2Container.style.pointerEvents = 'none'; // Não interagir com o cubo2 enquanto esmaece
        botao2.style.display = 'none'; // Esconder o botão do cubo2
        setTimeout(() => {
            // Depois que o cubo2 esmaecer, mover ele para trás
            cubo2.style.zIndex = 0;
            cubo1.style.zIndex = 2;
            cubo2Container.style.opacity = 1;
            cubo2Container.style.pointerEvents = 'auto';
            botao2.style.display = 'block'; // Mostrar o botão do cubo2 novamente
        }, 1000); // Tempo do esmaecimento (1 segundo)
    }
});
