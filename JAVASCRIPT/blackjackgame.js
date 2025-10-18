let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "TAOY",
    chips: 150
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.chips

function getRandonCard() {
    let numberGen = Math.floor(Math.random() * 13) + 1
    if(numberGen > 10) {
        return 10
    }else if(numberGen === 1) {
        return 11
    }else {
        return numberGen
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandonCard()
    let secondCard = getRandonCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i]+", "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "You've got Blackjack!!!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!!!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandonCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
