const botao = document.querySelector("button");
botao.addEventListener("click",botaoclicado);

function botaoclicado() {
    console.log("Clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
}