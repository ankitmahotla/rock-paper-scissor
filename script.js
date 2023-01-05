const arr = ['Rock', 'Paper', 'Scissors']
const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random()*3)
  return arr[computerChoice]
}

function getResult(playerChoice, computerChoice) {
  let score;

  if(playerChoice == computerChoice)
  score = 0;
  else if(playerChoice == 'Rock' && computerChoice == 'Scissor')
  score = 1;
  else if(playerChoice == 'Paper' && computerChoice == 'Rock')
  score = 1;
  else if(playerChoice == 'Scissor' && computerChoice == 'Paper')
  score = 1;
  else
  score = -1;

  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')

  if(score = 1)
  resultDiv.innerText = 'You Won!'
  else if(score = -1)
  resultDiv.innerText = 'You Lost!'
  else
  resultDiv.innerText = 'Its a tie'

  handsDiv.innerText = `Player: ${playerChoice} vs Computer: ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
  computerScoreDiv.innerText = `Computer Score: ${totalScore['computerScore']}`
}

function onclickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  totalScore['computerScore'] += -score
  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onclickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()