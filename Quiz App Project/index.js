let flag = true
const startBtn = document.querySelector('#start-btn')
const quizCard = document.querySelector('#quiz-card')

const queston = document.querySelector('#quiz-question h2')
const option1 = document.querySelector('#option-one')
const option2 = document.querySelector('#option-two')
const option3 = document.querySelector('#option-three')
const p1 = document.querySelector('#option-one p')
const p2 = document.querySelector('#option-two p');
const p3 = document.querySelector('#option-three p');

let counter = 0


startBtn.addEventListener('click', startQuiz)

//Starts the quize when start button is clicked
function startQuiz(){
    if(flag){
        enableListeners() 
        initialCard()
    }
}

//Intially loads the first quiz card 
function initialCard(){
    startBtn.style.display = 'none'
    quizCard.style.display = 'flex'
    const data = quiz[0]
    queston.innerHTML = data.question
    p1.innerHTML = data.option1
    p2.innerHTML = data.option2
    p3.innerHTML = data.option3
}

//Enables click listeners on options
function enableListeners(){
    option1.addEventListener('click', hadleOptionClick);
    option2.addEventListener('click', hadleOptionClick);
    option3.addEventListener('click', hadleOptionClick);
}

//disables click listeners on options
function disableListeners(){
    option1.removeEventListener('click', hadleOptionClick);
    option2.removeEventListener('click', hadleOptionClick);
    option3.removeEventListener('click', hadleOptionClick);
}

//Handles Click on the option
function hadleOptionClick(e){
    const clickedOption = e.target
    console.log(clickedOption, 'Clicked');
    disableListeners()  
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