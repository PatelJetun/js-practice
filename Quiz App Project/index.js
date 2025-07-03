let flag = true;
const startBtn = document.querySelector("#start-btn");
const quizCard = document.querySelector("#quiz-card");

const queston = document.querySelector("#quiz-question h2");
const option1 = document.querySelector("#option-one");
const option2 = document.querySelector("#option-two");
const option3 = document.querySelector("#option-three");
const p1 = document.querySelector("#option-one p");
const p2 = document.querySelector("#option-two p");
const p3 = document.querySelector("#option-three p");
const highScoreDiv = document.querySelector(".high-score span");
const continueBtn = document.querySelector('#continue-btn')

let counter = 0;
let score = 0;

let localHighScore = localStorage.getItem("highScore");

if (localHighScore) {
  highScoreDiv.innerHTML = `${localHighScore}`;
} 

startBtn.addEventListener("click", startQuiz);

//Starts the quize when start button is clicked
function startQuiz() {
  if (flag) {
    enableListeners();
    initialCard();
  }
}

//Intially loads the first quiz card
function initialCard() {
  startBtn.style.display = "none";
  quizCard.style.display = "flex";
  const data = quiz[0];
  queston.innerHTML = data.question;
  p1.innerHTML = data.option1;
  p2.innerHTML = data.option2;
  p3.innerHTML = data.option3;
}

//Enables click listeners on options
function enableListeners() {
  option1.addEventListener("click", hadleOptionClick);
  option2.addEventListener("click", hadleOptionClick);
  option3.addEventListener("click", hadleOptionClick);
}

//disables click listeners on options
function disableListeners() {
  option1.removeEventListener("click", hadleOptionClick);
  option2.removeEventListener("click", hadleOptionClick);
  option3.removeEventListener("click", hadleOptionClick);
}

//Handles Click on the option
function hadleOptionClick(e) {
  const clickedOption = e.target;
  const answer = e.target.querySelector(".option").textContent;
  disableListeners();
  verifyAnswer(clickedOption, answer);
}

//verifies the answer
function verifyAnswer(option, answer) {
  const optionLetter = option.querySelector(".option-letter");
  if (answer === quiz[counter].answer) {
    option.classList.add("active-correct");
    optionLetter.innerHTML = `<i class="fa-solid fa-check" style="color: #31cd63;"></i>`;
    handleScore(true);
  } else {
    option.classList.add("active-wrong");
    optionLetter.innerHTML = `<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>`;
    handleScore(false);
  }
}

//handles score increment / decrement and display, updates high score if "score > high score"
function handleScore(flag) {
  const scoreP = document.querySelector(".score span");
  if (flag) {
    score += 50;
    scoreP.innerHTML = `${score}`;
  } else {
    score -= 10;
    scoreP.innerHTML = `${score}`;
  }
    if(score > localHighScore){
    highScoreDiv.innerHTML = `${score}`
  }

}









































































































const quiz = [
  {
    question: "What is the Capital of India?",
    option1: "kolkatta",
    option2: "Mumbai",
    option3: "Delhi",
    get answer() {
      return this.option3;
    },
  },
  {
    question: "What is the National Animal of India?",
    option1: "Peacock",
    option2: "Eagle",
    option3: "Duck",
    get answer() {
      return this.option1;
    },
  },
  {
    question: "Which of the below language is the foundation of Webpages",
    option1: "CSS",
    option2: "Java",
    option3: "HTML",
    get answer() {
      return this.option3;
    },
  },
  {
    question: "Which of the following is the largest continent in the world?",
    option1: "North America",
    option2: "Asia",
    option3: "Antartica",
    get answer() {
      return this.option2;
    },
  },
  {
    question: "Which is the largest mammal in the world?",
    option1: "Elephant",
    option2: "Blue Whale",
    option3: "Giraffe",
    get answer() {
      return this.option2;
    },
  },
];
