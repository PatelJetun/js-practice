const option = document.querySelector('#quiz-card')
let clicked = false

option.addEventListener('click', (e) => {
    if(e.target.id === "option-one" || e.target.id === "option-two" || e.target.id === "option-three"){
        if(!clicked){
            clicked = true;
            const selectedOption = document.getElementById(e.target.id);
            const label = selectedOption.querySelector(".option-letter");
            label.innerHTML = `<i class="fa-solid fa-check" style="color: #31cd63;"></i>`;
            selectedOption.classList.add("active");
            console.log(
              `${e.target.id} clicked and Value of clicked: ${clicked}`
            );
        }
    }
})
