const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")
let ingressos = [];

const lancamento = "01 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date();

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias);
    hora.innerHTML = formatoTempo(finalHoras);
    minuto.innerHTML = formatoTempo(finalMinutos);
    segundo.innerHTML = formatoTempo(finalSegundos);
}

function formatoTempo( tempo ){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);

function highlightCard(selector){
    let element = document.querySelector(selector);

    element.classList.toggle("card-highlight");
}

function selectCard(selector){
    let element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)){
        index = ingressos.indexOf(selector);
        ingressos.splice(index, 1);
    }else{
        ingressos.push(selector);
    }
}

function showSelectedCards(){
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    let modalBody = document.querySelector(".modal-body");
    
    if(ingressos.length > 0){
        modalBody.innerHTML = ingressos;
    }else{
        modalBody.innerHTML = "Nenhum ingresso selecionado";
    }

    myModal.show();
}