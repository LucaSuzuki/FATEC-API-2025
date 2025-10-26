const conteudo = document.querySelector(".conteudo"); //Onde será adicionado o conteudo
const voltar = document.querySelector(".btn_voltar"); //Botão de voltar
const proximo = document.querySelector(".btn_proximo");// Botão de proximo

const btn_conteudo1 = document.querySelector(".btn_conteudo1");
const btn_conteudo2 = document.querySelector(".btn_conteudo2");
const btn_conteudo3 = document.querySelector(".btn_conteudo3");
const btn_conteudo4 = document.querySelector(".btn_conteudo4");
const btn_conteudo5 = document.querySelector(".btn_conteudo5");
const btn_conteudo6 = document.querySelector(".btn_conteudo6");
const btn_conteudo7 = document.querySelector(".btn_conteudo7");
const btn_conteudo8 = document.querySelector(".btn_conteudo8");
const btn_conteudo9 = document.querySelector(".btn_conteudo9");
const btn_conteudo10 = document.querySelector(".btn_conteudo10");
const btn_conteudo11 = document.querySelector(".btn_conteudo11");
const btn_conteudo12 = document.querySelector(".btn_conteudo12");

let valor = 1; // Variavel para trocar de pagina

// ------------- Assim que inciar a pagina ----------
if(valor===1){
    renderizar(1)
}

// ------- Conteudo nav esquerda ---------
btn_conteudo1.addEventListener("click", ()=>{
    valor = 1;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo2.addEventListener("click", ()=>{
    valor = 2;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo3.addEventListener("click", ()=>{
    valor = 3;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo4.addEventListener("click", ()=>{
    valor = 4;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo5.addEventListener("click", ()=>{
    valor = 5;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo6.addEventListener("click", ()=>{
    valor = 6;
    renderizar(valor);
        console.log(valor);
})

btn_conteudo7.addEventListener("click", ()=>{
    valor = 7;
    renderizar(valor);
})

btn_conteudo8.addEventListener("click", ()=>{
    valor = 8;
    renderizar(valor);
})

btn_conteudo9.addEventListener("click", ()=>{
    valor = 9;
    renderizar(valor);

})

btn_conteudo10.addEventListener("click", ()=>{
    valor = 10;
    renderizar(valor);
})

btn_conteudo11.addEventListener("click", ()=>{
    valor = 11;
    renderizar(valor);
})

btn_conteudo12.addEventListener("click", ()=>{
    valor = 12;
    renderizar(valor);
})

// -------- Voltar -------
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

// -------- Proximo ---------
proximo.addEventListener("click", () => {
    if(valor <= 12){
        valor = valor + 1;
        renderizar(valor);
    }
    else{
        valor = 12;
        renderizar(valor);
    }
});


// --------- Renderizar ---------
function renderizar(valor){
    // Renderizar conteudo
    if (valor === 1) {
        conteudo.innerHTML = conteudo1
    };
    if (valor === 2) {
        conteudo.innerHTML = conteudo2
    };
    if (valor === 3) {
        conteudo.innerHTML = conteudo3
    };
    if (valor === 4) {
        conteudo.innerHTML = conteudo4
    };
    if (valor === 5) {
        conteudo.innerHTML = conteudo5
    };
    if (valor === 6) {
        conteudo.innerHTML = conteudo6
    };
    if (valor === 7) {
        conteudo.innerHTML = conteudo7
    };
    if (valor === 8) {
        conteudo.innerHTML = conteudo8
    };
    if (valor === 9) {
        conteudo.innerHTML = conteudo9
    };
    if (valor === 10) {
        conteudo.innerHTML = conteudo10
    };
    if (valor === 11) {
        conteudo.innerHTML = conteudo11
    };
    if (valor === 12) {
        conteudo.innerHTML = conteudo12
    };

}