const option = document.querySelector("#quiz-card");
const options = document.querySelectorAll("#quiz-option div");
const btn = document.querySelector('#continue-btn')

option.addEventListener("click", (e) => {
  if (
    e.target.id === "option-one" ||
    e.target.id === "option-two" ||
    e.target.id === "option-three"
  ) {
    setOptionStyle(e.target.id);
  }
});

btn.addEventListener('click', () => {
  const answer = document.querySelector('.active p').textContent
  if(answer === "option1"){
    
  }
})


function setOptionStyle(id) {

  options.forEach((option) => {
    option.classList = ''
    if(option.id === id){
      option.classList.add('active')
    }
  });
}


