const score_display = document.querySelector('#score-display')
const start_button = document.querySelector('#start')
const stop_button = document.querySelector('#stop')
const time_display = document.querySelector('#time-display')
const squares = document.querySelectorAll('.square')
let random_square = squares[0]
let countdown = 60
let score = 0
let move_mole_id
let countdown_id
let game_status = 'not live'

score_display.innerHTML = score
time_display.innerHTML = countdown

function moveMole() {
    random_square.classList.remove('mole')
    random_square = squares[Math.floor(Math.random() * 9)]
    random_square.classList.add('mole')
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(random_square.id === square.id){
            score++
            score_display.innerHTML = score
        }
    })
})

function callMoveMole() {
    move_mole_id = setInterval(moveMole, 500)
}

function countDown() {
    countdown--
    time_display.innerHTML = countdown

    if(countdown === 0){
        time_display.innerHTML = `GAME OVER! Your final score was ${score}`
        clearInterval(move_mole_id)
        clearInterval(countdown_id)
        game_status = 'not live'
    }
}

start_button.addEventListener('click', () => {
    if(game_status === 'not live'){
        countdown = 60
        score = 0
        time_display.innerHTML = countdown
        score_display.innerHTML = score
        game_status = 'live'
        callMoveMole()
        countdown_id = setInterval(countDown, 1000)
    }
})

stop_button.addEventListener('click', () => {
    if(game_status === 'live'){
        game_status = 'not live'
        clearInterval(move_mole_id)
        clearInterval(countdown_id)
        countdown = 60
        score = 0
        time_display.innerHTML = countdown
        score_display.innerHTML = score
        random_square.classList.remove('mole')
    }
})






