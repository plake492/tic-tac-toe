const endGame = document.getElementById('end-game')
const box = document.querySelectorAll('.box')
let userOne = true
let moves = 0

const gameArr = [
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
  if (!userOne)box.textContent = 'X'
  userOne = !userOne
  moves++
  if (moves === 9) {
    endGame.textContent = 'Game Over'
    gameOver()
  }
  logic(box)
}

const logic = (box) => {
  const colI = parseInt(box.attributes['data-index'].value)
  const rowI = parseInt(box.attributes.id.value)
  gameArr[colI][rowI] = box.textContent

  if (gameArr[0][0] === gameArr[0][1] && gameArr[0][1] === gameArr[0][2]) {
    endGame.textContent = gameArr[0][0] + ' wins'
    gameOver()
  }
  if (gameArr[1][0] === gameArr[1][1] && gameArr[1][1] === gameArr[1][2]) {
    endGame.textContent = gameArr[1][0] + ' wins'
    gameOver()
  }
  if (gameArr[2][0] === gameArr[2][1] && gameArr[2][1] === gameArr[2][2]) {
    endGame.textContent = gameArr[2][0] + ' wins'
    gameOver()
  }
  if (gameArr[0][0] === gameArr[1][0] && gameArr[1][0] === gameArr[2][0]) {
    endGame.textContent = gameArr[0][0] + ' wins'
    gameOver()
  }
  if (gameArr[0][1] === gameArr[1][1] && gameArr[1][1] === gameArr[2][1]) {
    endGame.textContent = gameArr[0][1] + ' wins'
    gameOver()
  }
  if (gameArr[0][2] === gameArr[1][2] && gameArr[1][2] === gameArr[2][2]) {
    endGame.textContent = gameArr[0][2] + ' wins'
    gameOver()
  }
  if (gameArr[0][0] === gameArr[1][1] && gameArr[1][1] === gameArr[2][2]) {
    endGame.textContent = gameArr[0][0] + ' wins'
    gameOver()
  }
  if (gameArr[0][2] === gameArr[1][1] && gameArr[1][1] === gameArr[2][0]) {
    endGame.textContent = gameArr[0][0] + ' wins'
    gameOver()
  }
}

const gameOver = () => {
  box.forEach(item => {
    item.setAttribute('style', 'pointer-events:none')
  })
}
