const botao = document.getElementById('btnMensagem');

if (botao) {
    botao.addEventListener('click', function () {
        alert("Olá! O pão de queijo quentinho acabou de sair do forno! Venha experimentar!");
        console.log("Botão de boas-vindas clicado.");
    });
} else {
    console.log("Botão não encontrado.");
}


const botaoCroassant = document.getElementById('croassant');

if (botaoCroassant) { 
    botaoCroassant.addEventListener('click', function () {
        alert("Croassant de chocolate com 20% de desconto hoje!");
        console.log("Botão de desconto clicado.");
    });
} else {
    console.log("Botão não encontrado.");
}