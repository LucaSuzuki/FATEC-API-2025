//VARIVEIS QUE GUARDAM O RESULTADO DO VERIFICADOR
const modal_success = `
    <i class="bi bi-check-circle text-success" style="font-size: 100px;"></i>
    <p class="text-center">Resposta está certa</p>
`
const modal_danger = `
    <i class="bi bi-x-circle text-danger" style="font-size: 100px;"></i>
    <p class="text-center">Resposta está errada</p>
`

const modal_null = `
    <i class="bi bi-exclamation-triangle text-warning" style="font-size: 100px;"></i>
    <p class="text-center">Nenhuma resposta selecionada</p>
`

//VARIAVEL QUE VAI GUARDAR ONDEM VAI ESTAR O CONTEUDO DO MODAL
const conteudo_modal = document.querySelector(".conteudo_verificar");
//VARIAVEL QUE VAI GUADAR O BOTAO DE VERIFICACAO
const verificador = document.getElementById("btn_verificador");

//QUANDO O BOTAO FOR ACIONADO/CLICADO
verificador.addEventListener("click", () =>{
    //VARIAVEL QUE GUARDA A ALTERNATIVA SELECIONADA
    const alternativa = document.querySelector('input[name="questao"]:checked');
    //SE ELA EXISTIR
    if (alternativa){
        //SE O VALOR DELA FOR TRUE
        if (alternativa.value === "true"){
            conteudo_modal.innerHTML = modal_success;
        }
        //SE FOR DIFERENTE DE TRUE/NO CASO FALSE
        else{
            conteudo_modal.innerHTML = modal_danger;
        }
    }
    //SE ELA NAO EXISTIR
    else{
        conteudo_modal.innerHTML = modal_null;
    }
});