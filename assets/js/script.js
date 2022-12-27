const timerSelecao = document.querySelector('.timer');
const start = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const clear = document.querySelector('.zerar');
let segundos = 0;
let timer;

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
    timerSelecao.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
    clearInterval(timer);    
    timerSelecao.classList.add('pausado');
    }
    if (el.classList.contains('zerar')) {
    timerSelecao.classList.remove('pausado');
    clearInterval(timer);  
    timerSelecao.innerHTML = "00:00:00";
    segundos = 0;
    }
})

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        timerSelecao.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}