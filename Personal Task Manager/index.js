const taskName = document.querySelector("#taskName");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const priorityLevel = document.querySelector("#priorityLevel");
const submitBtn = document.querySelector("#submitBtn");
const taskCardContainer = document.querySelector("#task-card-container");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(checkInput()){
        addTaskCard()
    } else {
        alert("Make sure to fill all fields")
    }
    document.querySelector("form").reset();
})

function checkInput() {
    if(
        taskName.value === "" ||
        startTime.value === ""||
        endTime.value === ""||
        priorityLevel.value === ""
    ){
        return false;
     } else {
        return true;
     }
}

function addTaskCard() {
    taskCardContainer.innerHTML += 
    `<div class="task-card">
            <p clas="task-name">Task: <span>${taskName.value}</span> </p>
            <p clas="task-start">Start: <span>${startTime.value}</span> </p>
            <p clas="task-end">End: <span>${endTime.value}</span> </p>
            <p clas="task-end">Priority Level: <span>${priorityLevel.value}</span> </p>
            <button class="reminder-btn"><i class="fa-solid fa-bell"></i>Reminder</button>
    </div>`;
}