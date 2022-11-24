/*
Para eu acessar pela DOM um Objeto/ tag uso document.querySelecetor('.name')

Para não ter que fazer isso todoas as vezes eu coloco isso dentro de uma variável.

torna mais simpres de acessar.
*/

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const soundOff = document.querySelector('.soundOff')
const soundOn = document.querySelector('.soundOn')

let minutes
const minutesDisplay = document.querySelector('.minutes')

//====================CONTROLES====================//
//troca dos botões
buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
})

buttonStop.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
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