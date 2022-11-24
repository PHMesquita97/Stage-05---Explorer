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
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplays = document.querySelector('.seconds')

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
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
})

buttonStop.addEventListener('click', function(){
    resetControls()
})

buttonSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = minutes
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
    setTimeout(function(){
        let seconds = Number(secondsDisplays.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if(seconds <= 0){
            seconds = 4

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplays.textContent = String(seconds - 1).padStart(2, "0")

        if(minutes <= 0){
            resetControls()
            return
        }

 
        countdown()
    }, 1000)
}

//resetar os controles quando chegam a 0 ou stop acionado
function resetControls(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
}
