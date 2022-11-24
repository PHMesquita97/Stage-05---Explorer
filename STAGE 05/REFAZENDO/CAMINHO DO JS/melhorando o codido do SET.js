/*
Para eu acessar pela DOM um Objeto/ tag uso document.querySelecetor('.name')

Para não ter que fazer isso todoas as vezes eu coloco isso dentro de uma variável.

torna mais simpres de acessar.
*/

//variaveis dos botões de controle
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

//variaveis da musica de fundo
const soundOff = document.querySelector('.soundOff')
const soundOn = document.querySelector('.soundOn')

//variaveis das funcionalidades
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplays = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//====================CONTROLES====================//
//troca dos botões
buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countdown()
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    //parar a regressiva
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function(){
    resetControls()
    resetTimer()
})

buttonSet.addEventListener('click', function(){
    let newMinutes = prompt('Quantos minutos?')
    /* se o usuario colocar algo que não seja numeroa a app vai crashar. Por isso vamos limitar isso com um IF*/
    //!==NOT
    if (!newMinutes){
        resetTimer()
        return
    }

    /* Antes de Pegar o minutes de toda a aplicação, Confere se esses novos minutos são outra coisa que não numeros.
    
    se eles forem numeros então atualize
    */ 
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})

//====================MÚSICA====================//
soundOff.addEventListener('click',function(){
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
})

soundOn.addEventListener('click', function(){
    soundOn.classList.add('hide')
    soundOff.classList.remove('hide')
})

//====================FUNCIONALIDADE====================//
//timer
function countdown() {
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplays.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if(minutes <= 0) {
            resetControls()
            return
        }

        if(seconds <= 0) {
            seconds = 3 
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1 ))

        countdown()
    }, 1000)
}

function resetControls(){
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplays.textContent = String(seconds).padStart(2, "0")
}

//criando a Funcionalidade Pause e a Funcionalidede Stop 
//clearTimeOut é uma função do JS para limpar os timeOuts nós estamos usando um para o COUNTDOWN

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}