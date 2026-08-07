const botao = document.querySelector("Button");
botao.addEventListener("Click", botaoclicado);

function botaoclicado() {
    console.log("Clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
}