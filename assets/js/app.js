const endGame = document.getElementById('end-game')
const box = document.querySelectorAll('.box')
let userOne = true
let moves = 0

let gameArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

box.forEach(item => {
  item.addEventListener('click', function () {
    game(this)
  })
})

const game = (box) => {
  if (box.textContent) {
    return
  }
  if (userOne) box.textContent = 'O'
  if (!userOne) box.textContent = 'X'

  moves++
  if (moves === 9) {
    gameOver()
  }

  logic(box)
}

const logic = (box) => {
  const colI = parseInt(box.attributes['data-index'].value)
  const rowI = parseInt(box.attributes.id.value)
  gameArr[colI][rowI] = box.textContent

  if (gameArr[0][0] === gameArr[0][1] && gameArr[0][1] === gameArr[0][2]) {
    return gameOver()
  }
  if (gameArr[1][0] === gameArr[1][1] && gameArr[1][1] === gameArr[1][2]) {
    return gameOver()
  }
  if (gameArr[2][0] === gameArr[2][1] && gameArr[2][1] === gameArr[2][2]) {
    return gameOver()
  }
  if (gameArr[0][0] === gameArr[1][0] && gameArr[1][0] === gameArr[2][0]) {
    return gameOver()
  }
  if (gameArr[0][1] === gameArr[1][1] && gameArr[1][1] === gameArr[2][1]) {
    return gameOver()
  }
  if (gameArr[0][2] === gameArr[1][2] && gameArr[1][2] === gameArr[2][2]) {
    return gameOver()
  }
  if (gameArr[0][0] === gameArr[1][1] && gameArr[1][1] === gameArr[2][2]) {
    return gameOver()
  }
  if (gameArr[0][2] === gameArr[1][1] && gameArr[1][1] === gameArr[2][0]) {
    return gameOver()
  }
  userOne = !userOne
}

const gameOver = () => {
  box.forEach(item => {
    item.setAttribute('style', 'pointer-events:none')
  })
  let endText
  if (moves === 9) { endText = "It's a Draw" } else {
    if (userOne) { endText = 'O WINS!' }
    if (!userOne) { endText = 'X WINS!' }
  }
  endGame.setAttribute('style', 'display: block')
  endGame.textContent = endText
  const btnEl = document.createElement('button')
  btnEl.textContent = 'Play Again'
  btnEl.id = 'restart'
  endGame.appendChild(btnEl)
}

const restartGame = () => {
  userOne = true
  moves = 0
  gameArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  endGame.setAttribute('style', 'display: none')
  box.forEach(item => {
    item.textContent = ''
    item.setAttribute('style', 'pointer-events:initial')
  })
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'restart') {
    restartGame()
  }
})
