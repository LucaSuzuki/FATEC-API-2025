const conteudo = document.querySelector(".conteudo"); //Onde será adicionado o conteudo
const voltar = document.querySelector(".btn_voltar"); //Botão de voltar
const proximo = document.querySelector(".btn_proximo");// Botão de proximo
const btn_verificar = document.querySelector(".btn_verificador"); // Botão de verificar

const btn_conteudo1 = document.querySelector(".btn_conteudo1");
const btn_exercicio1 = document.querySelector(".btn_exercicio1");

const btn_conteudo2 = document.querySelector(".btn_conteudo2");
const btn_exercicio2 = document.querySelector(".btn_exercicio2");

const btn_conteudo3 = document.querySelector(".btn_conteudo3");
const btn_exercicio3 = document.querySelector(".btn_exercicio3");

const btn_conteudo4 = document.querySelector(".btn_conteudo4");
const btn_exercicio4 = document.querySelector(".btn_exercicio4");

const btn_conteudo5 = document.querySelector(".btn_conteudo5");
const btn_exercicio5 = document.querySelector(".btn_exercicio5");

const btn_conteudo6 = document.querySelector(".btn_conteudo6");
const btn_exercicio6 = document.querySelector(".btn_exercicio6");

let valor = 1; // Variavel para trocar de pagina

// ------------- Assim que inciar a pagina ----------
if(valor===1){
    btn_verificar.style.display='none';
    renderizar(1)
}

// ------- Conteudo nav esquerda ---------
btn_conteudo1.addEventListener("click", ()=>{
    valor = 1;
    renderizar(valor);
})

btn_conteudo2.addEventListener("click", ()=>{
    valor = 3;
    renderizar(valor);
})

btn_conteudo3.addEventListener("click", ()=>{
    valor = 5;
    renderizar(valor);
})

btn_conteudo4.addEventListener("click", ()=>{
    valor = 7;
    renderizar(valor);
})

btn_conteudo5.addEventListener("click", ()=>{
    valor = 9;
    renderizar(valor);
})

btn_conteudo6.addEventListener("click", ()=>{
    valor = 11;
    renderizar(valor);
})

// ------- Exerciocios --------
btn_exercicio1.addEventListener("click", ()=>{
    valor = 2;
    renderizar(valor);
})

btn_exercicio2.addEventListener("click", ()=>{
    valor = 4;
    renderizar(valor);
})

btn_exercicio3.addEventListener("click", ()=>{
    valor = 6;
    renderizar(valor);
})

btn_exercicio4.addEventListener("click", ()=>{
    valor = 8;
    renderizar(valor);
})

btn_exercicio5.addEventListener("click", ()=>{
    valor = 10;
    renderizar(valor);
})

btn_exercicio6.addEventListener("click", ()=>{
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
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo1
    };
    if (valor === 3) {
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo2
    };
    if (valor === 5) {
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo3
    };
    if (valor === 7) {
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo4
    };
    if (valor === 9) {
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo5
    };
    if (valor === 11) {
        btn_verificar.style.display='none';
        conteudo.innerHTML = conteudo6
    };

    //Renderizar Exercicios
    if (valor === 2) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio1
    };
    if (valor === 4) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio2
    };
    if (valor === 6) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio3
    };
    if (valor === 8) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio4
    };
    if (valor === 10) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio5
    };
    if (valor === 12) {
        btn_verificar.style.display='block';
        conteudo.innerHTML = exercicio6
    };
}