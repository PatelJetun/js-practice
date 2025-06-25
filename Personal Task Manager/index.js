const taskName = document.querySelector("#taskName");
const endTime = document.querySelector("#endTime");
const priorityLevel = document.querySelector("#priorityLevel");
const submitBtn = document.querySelector("#submitBtn");
const taskCardContainer = document.querySelector("#task-card-container");

submitBtn.addEventListener("click", function (e) {
  // Accept form data
  e.preventDefault();
  if (checkInput()) {
    addTaskCard();
  } else {
    alert("Make sure to fill all fields");
  }
  document.querySelector("form").reset();
});

taskCardContainer.addEventListener("click", function (e) {
  // Handle Card Delete and Edit
  if (e.target.classList.contains("delete-btn")) {
    const card = e.target.closest(".task-card");
    if (card) {
      removeCard(card);
    }
  }
});

function checkInput() {
  // Validates User  Input
  if (
    taskName.value === "" ||
    endTime.value === "" ||
    priorityLevel.value === ""
  ) {
    return false;
  } else {
    return true;
  }
}

function addTaskCard() {
  //Adds task Car
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  taskCard.innerHTML = `<p clas="task-name">Task: <span>${taskName.value}</span> </p>
  <p class="task-end">End: <span>${endTime.value}</span> </p>
  <p class="task-end">Priority Level: <span>${priorityLevel.value}</span> </p>
  <button class="reminder-btn"><i class="fa-solid fa-bell"></i>Reminder</button>
  <i class="fa-solid fa-pen edit-btn"></i> 
  <i class="fa-solid fa-trash delete-btn"></i>
  <p class="time-counter">Time: <span>Test Time</span></p>`;

  taskCardContainer.appendChild(taskCard);

  const timeSpan = taskCard.querySelector(".time-counter span")
  calculateTime(endTime.value, timeSpan)
  const timerId =   calculateTime(endTime.value, timeSpan);
  taskCard.timerId = timerId; 
}
function removeCard(card) {
  //Remove Card
  if (card.timerId){
    console.log(`Clear Interval Called ${card.timerId} freed`);
    clearInterval(card.timerID)
  }
  card.remove();
}

function calculateTime(end, displayElement) {
  const endTime = new Date(end);

  function updateCounter() {
    const currentTime = new Date();
    const remaining = endTime - currentTime;

    if (remaining <= 0) {
      clearInterval(timer);
      displayElement.textContent = "Time is Up!"
      return;
    }

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    displayElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
  updateCounter(); 
  const timer = setInterval(updateCounter, 1000);
  return timer;
}
