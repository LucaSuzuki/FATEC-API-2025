const voltar = document.querySelector(".btn_voltar");
const proximo = document.querySelector(".btn_proximo");
const conteudo_questao = document.querySelector(".conteudo_questao");
const btn_exercicio1 = document.querySelector(".btn_exercicio1");
const btn_exercicio2 = document.querySelector(".btn_exercicio2");
const btn_exercicio3 = document.querySelector(".btn_exercicio3");
const btn_exercicio4 = document.querySelector(".btn_exercicio4");
const btn_exercicio5 = document.querySelector(".btn_exercicio5");
let valor = 1;

btn_exercicio1.addEventListener("click", ()=>{
    valor = 1;
    renderizar(valor);
})

btn_exercicio2.addEventListener("click", ()=>{
    valor = 2;
    renderizar(valor);
})

btn_exercicio3.addEventListener("click", ()=>{
    valor = 3;
    renderizar(valor);
})

btn_exercicio4.addEventListener("click", ()=>{
    valor = 4;
    renderizar(valor);
})

btn_exercicio5.addEventListener("click", ()=>{
    valor = 5;
    renderizar(valor);
})

voltar.addEventListener("click", () => {
    if (valor > 1){
        valor = valor - 1;
        renderizar(valor);
    }
    else{
        valor = 1;
        renderizar(valor);
    }
});

proximo.addEventListener("click", () => {
    if(valor < 5){
        valor = valor + 1;
        renderizar(valor);
    }
    else{
        valor = 5;
        renderizar(valor);
    }
});

function renderizar(valor){
    if (valor === 1) {
        conteudo_questao.innerHTML = exercio1
    };
    if (valor === 2) {
        conteudo_questao.innerHTML = exercio2
    };
    if (valor === 3) {
        conteudo_questao.innerHTML = exercio3
    };
    if (valor === 4) {
        conteudo_questao.innerHTML = exercio4
    };
    if (valor === 5) {
        conteudo_questao.innerHTML = exercio5
    };
}