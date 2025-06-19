# Project Markdown file

# Solution Code

## project 1

```javascript
    console.log("Jetun")
    const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
      console.log(button)
      button.addEventListener('click', function(e) {
            console.log(e)
            console.log(e.target.id)
            let targetId = e.target.id

            switch (targetId){
              case "grey":
                  body.style.backgroundColor = e.target.id
                break;

              case "white":
                body.style.backgroundColor = e.target.id
                break;

              case "blue":
                body.style.backgroundColor = e.target.id
                break;

              case "yellow":
                body.style.backgroundColor = e.target.id 
                break;

              case "purple":
                body.style.backgroundColor = e.target.id 
                break;
            }
      }) 
})


```    
## project 2 solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show result

    if (bmi <= 18.6) {
      results.innerHTML = `<span>BMI: ${bmi} <br> Underweight</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>BMI: ${bmi} <br> Normal</span>`;
    } else {
      results.innerHTML = `<span>BMI: ${bmi} <br> Overweight</span>`;
    }
  }
});


```

## project 3 solution

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let attempts = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than one');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (attempts === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is Tooo low');
  } else if (guess > randomNumber) {
    displayMessage('Number is Tooo High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  attempts++;
  remainingGuess.innerHTML = `${11 - attempts}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}<h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame" style="cursor: pointer;">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    attempts = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - attempts}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```