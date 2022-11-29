//====================VARIÁVEIS====================//
//botões do Timer
const btnPlay = document.querySelector('.Play')
const btnPause = document.querySelector('.Pause')
const btnStop = document.querySelector('.Stop')
const btnPlus = document.querySelector('.Plus')
const btnMinus = document.querySelector('.Minus')
const btnSet = document.querySelector('.Set')
//botões dos sons
const btnFlorest = document.querySelector('.florest')
const btnRain = document.querySelector('.rain')
const btnCoffe = document.querySelector('.coffe')
const btnFire = document.querySelector('.fire')
// audios
const audioFlorest = new Audio ("./assets/Floresta.wav")
const audioRain = new Audio("./assets/Chuva.wav")
const audioCoffe = new Audio("./assets/Cafeteria.wav")
const audioFire = new Audio("./assets/Lareira.wav")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const timerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

audioFlorest.loop = true
audioRain.loop = true
audioCoffe.loop = true
audioFire.loop = true

//Timer
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplays = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//====================CONTROLES====================//
btnPlay.addEventListener('click', function(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
    countdown()
    buttonPress ()
})

btnPause.addEventListener('click', function(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

    clearInterval(timerTimeOut)
    buttonPress ()
})

btnStop.addEventListener('click', resetControls)

btnSet.addEventListener('click', function(){
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes){
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
    buttonPress ()
})

btnPlus.addEventListener('click', function() {
    Plus5()    
})
  
btnMinus.addEventListener('click', function() {
    Minus5()    
})

//====================TIMER====================//
function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplays.textContent = String(seconds).padStart(2, "0")
}

function resetControls(){
    btnStop.classList.add('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnPlay.classList.remove('hide')
    resetTimer()
    buttonPress ()
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplays.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if(minutes <=0 && seconds<= 0){
            resetControls()

            return
        }

        if(seconds <= 0){
            seconds = 6
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

function Plus5() {
    minutes = minutes ? Number(minutes) + 5 : minutes
    updateTimerDisplay(minutes, 0)
    buttonPress ()
}

function Minus5() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
    updateTimerDisplay(minutes, 0)
    buttonPress ()
}

//====================AUDIOS====================//
btnFlorest.addEventListener("click",togglePlayFlorest)

btnRain.addEventListener('click', togglePlayRain)

btnCoffe.addEventListener('click', togglePlayCoffe)

btnFire.addEventListener('click', togglePlayFire)

//====================FUNCIONALIDADE DOS AUDIOS====================//
// Ativar/ Desativar o play
//crio uma variavel ESTA TOCANDO? e atribuo a ela o falor de falso. pq inicialmente nada esta tocando
let isPlaying = false

// Função liga e desliga
function togglePlayFlorest(){
    /*  condicional ? verdadeiro : falso */
    
        isPlaying ? audioFlorest.pause() : audioFlorest.play()
    // tá tocando? se verdadeiro, então pare : se falso, então toque
}

//Quando o audio estiver tocando ou seja "onplayin" eu preciso que a minha variável "isPlaying" se torner Verdadeira "true" para isso uso a função
audioFlorest.onplaying = function(){
    isPlaying = true
}
// Agora quando eu clicar no botão o audio não vai mais estar "onplaying" vai esta "onpause". Por tanto preciso que quando ele estiver nesse estado ele retorne o "isPlaying" para seu valor original que é "false". Uso o mesmo metodo uma função
audioFlorest.onpause = function(){
    isPlaying = false
}


//Rain
function togglePlayRain(){
    isPlaying ? audioRain.pause() : audioRain.play()
    
    audioRain.onplaying = function(){
        isPlaying = true
    }
    audioRain.onpause = function(){
        isPlaying = false
    }
}

//coffe
function togglePlayCoffe(){
    isPlaying ? audioCoffe.pause() : audioCoffe.play()

    audioCoffe.onplaying = function(){
        isPlaying = true
    }
    audioCoffe.onpause = function(){
        isPlaying = false
    }
}

//lareira
function togglePlayFire(){
    isPlaying ? audioFire.pause() : audioFire.play()

    audioFire.onplaying = function(){
        isPlaying = true
    }
    audioFire.onpause = function(){
        isPlaying = false
    }
}
// Controles pressionado
function buttonPress (){
    buttonPressAudio.play()
}