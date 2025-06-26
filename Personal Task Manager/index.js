const taskName = document.querySelector("#taskName");
const endTime = document.querySelector("#endTime");
const priorityLevel = document.querySelector("#priorityLevel");
const submitBtn = document.querySelector("#submitBtn");
const taskCardContainer = document.querySelector("#task-card-container");
const editModal = document.querySelector("#editModal");
const submitEditBtn = document.querySelector("#submitEditForm");

const taskCardArr = new Array()

const editTaskName = document.querySelector("#editTaskName");
const editTaskDate = document.querySelector("#editTaskDate");
const editPriorityLevel = document.querySelector("#editPriorityLevel");
let clickedCard = null

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
  } else if (e.target.classList.contains("reminder-btn")) {
    const card = e.target.closest(".task-card");

    if (card && !card.reminderEnabled) {
      e.target.classList.toggle("active", true);
      card.reminderEnabled = true;
    } else if (card && card.reminderEnabled) {
      e.target.classList.toggle("active", false);
      card.reminderEnabled = false;
    }
  } else if (e.target.classList.contains("edit-btn")) {
    const card = e.target.closest(".task-card");
    console.log("edit btn clicked");
    clickedCard = card
    console.log(clickedCard);
    autoFillEditModalForm(card);
    editModal.style.display = "block";
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

const taskData = {
  taskId: Date.now(),
  taskName: taskName.value,
  taskDate: endTime.value,
  taskPriority: priorityLevel.value,
  reminderEnabled: false
};

console.log(taskData.taskId);
console.log(taskData.taskName);
console.log(taskData.taskDate);
console.log(taskData.taskPriority);
console.log(taskData.reminderEnabled);

taskCardArr.push(taskData);
console.log(taskCardArr);
renderTaskCards();
}

function renderTaskCards(){
  taskCardContainer.innerHTML = "";
  taskCardArr.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.dataset.id = task.taskId;

    taskCard.innerHTML = `
      <p class="task-name">Task: <span>${task.taskName}</span> </p>
      <p class="task-end">End: <span>${task.taskDate}</span> </p>
      <p class="task-priority">Priority Level: <span>${
        task.taskPriority
      }</span> </p>
      <button class="reminder-btn ${
        task.reminderEnabled ? " active" : ""
      }"><i class="fa-solid fa-bell"></i>Reminder</button>
      <i class="fa-solid fa-pen edit-btn"></i>
      <i class="fa-solid fa-trash delete-btn"></i>
      <p class="time-counter">Time: <span>Test Time</span></p>
    `;

    taskCardContainer.appendChild(taskCard);

    const timeSpan = taskCard.querySelector(".time-counter span");
    const timerId = calculateTime(task.taskDate, timeSpan);
    taskCard.timerId = timerId;
    taskCard.reminderEnabled = task.reminderEnabled;
  })
}


function removeCard(card) {
  const taskId = Number(card.dataset.id);
  // Remove from array
  const index = taskCardArr.findIndex((t) => t.taskId === taskId);
  if (index !== -1) {
    taskCardArr.splice(index, 1);
  }
  renderTaskCards();
}

function calculateTime(end, displayElement) {
  const endTime = new Date(end);
  const card = displayElement.closest(".task-card");
  let timer;

  function updateCounter() {
    const currentTime = new Date();
    const remaining = endTime - currentTime;

    if (remaining <= 0) {
      clearInterval(timer);
      displayElement.textContent = "Time is Up!";
      checkReminder(card);
      return;
    }

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    displayElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
  updateCounter();
  timer = setInterval(updateCounter, 1000);
  return timer;
}

function checkReminder(card) {
  if (card.reminderEnabled) {
    alert("Reminder Activated");
  }
}

function autoFillEditModalForm(card) {
  const taskName = card.querySelector(".task-name span").textContent;
  const taskDate = card.querySelector(".task-end span").textContent;
  const priorityLevel = card.querySelector(".task-priority span").textContent;

  editTaskName.value = taskName;
  editTaskDate.value = taskDate;
  editPriorityLevel.value = priorityLevel;
}

const closeEditModalBtn = document.getElementById("closeEditModal");
closeEditModalBtn.addEventListener("click", function () {
  editModal.style.display = "none";
});

editModal.addEventListener("click", function (event) {
  if (event.target === editModal) {
    editModal.style.display = "none";
  }
});

submitEditBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Task Edited Successfully");
  editTaskCard()
  editModal.style.display = "none";
});

function editTaskCard() {
  // Find the taskId from the clickedCard's dataset
  const taskId = Number(clickedCard.dataset.id);
  // Find the task object in the array
  const task = taskCardArr.find((t) => t.taskId === taskId);
  if (task) {
    task.taskName = editTaskName.value;
    task.taskDate = editTaskDate.value;
    task.taskPriority = editPriorityLevel.value;
    // Optionally reset reminderEnabled or other fields if needed
  }
  renderTaskCards();
}

