let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let newCardBtn = document.getElementById("new-card-btn")
let startGameBtn = document.getElementById("start-game-btn")
let playerEl = document.getElementById("player-el")

let cardsArr = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false

let player = {
  name: "John",
  chips: 250
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  hasBlackJack = false

  let firstCard = getRandomCard()
  let secondCard = getRandomCard()

  cardsArr = [ firstCard, secondCard ]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards:  "
  for (let i=0; i < cardsArr.length; i++) {
    cardsEl.textContent += "  " + cardsArr[i]
  }

  sumEl.textContent = "Sum:  " + sum

  if (sum < 21) {
    message = "Do you want to draw a new card? 🃏"
    newCardBtn.disabled = false
    startGameBtn.disabled = true
  } else if (sum === 21){
    message = "You've got Blackjack! 🥳"
    hasBlackJack = true
    newCardBtn.disabled = true
    startGameBtn.disabled = false
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
    newCardBtn.disabled = true
    startGameBtn.disabled = false
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newRandomCard = getRandomCard()
    cardsArr.push(newRandomCard)
    sum += newRandomCard

    renderGame()
  }
}