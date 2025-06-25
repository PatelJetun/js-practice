const taskName = document.querySelector("#taskName");
const endTime = document.querySelector("#endTime");
const priorityLevel = document.querySelector("#priorityLevel");
const submitBtn = document.querySelector("#submitBtn");
const taskCardContainer = document.querySelector("#task-card-container");
const editModal = document.querySelector("#editModal");

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
    console.log(card);
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
  //Adds task Car
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  taskCard.innerHTML = `
  <p class="task-name">Task: <span>${taskName.value}</span> </p>
  <p class="task-end">End: <span>${endTime.value}</span> </p>
  <p class="task-priority">Priority Level: <span>${priorityLevel.value}</span> </p>
  <button class="reminder-btn"><i class="fa-solid fa-bell"></i>Reminder</button>
  <i class="fa-solid fa-pen edit-btn"></i> 
  <i class="fa-solid fa-trash delete-btn"></i>
  <p class="time-counter">Time: <span>Test Time</span></p>
`;

  taskCardContainer.appendChild(taskCard);

  const timeSpan = taskCard.querySelector(".time-counter span");
  const timerId = calculateTime(endTime.value, timeSpan);
  taskCard.timerId = timerId;
  taskCard.reminderEnabled = false;
}
function removeCard(card) {
  //Remove Card
  if (card.timerId) {
    clearInterval(card.timerId);
  }
  card.remove();
}

function calculateTime(end, displayElement) {
  const endTime = new Date(end);
  const card = displayElement.closest(".task-card");

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
  const timer = setInterval(updateCounter, 1000);
  return timer;
}

function checkReminder(card) {
  if (card.reminderEnabled) {
    alert("Reminder Activated");
  }
}

function autoFillEditModalForm(card) {
  const editTaskName = document.querySelector("#editTaskName");
  const editTaskDate = document.querySelector("#editTaskDate");
  const editPriorityLevel = document.querySelector("#editPriorityLevel");

  const taskName = card.querySelector(".task-name span").textContent;
  const taskDate = card.querySelector(".task-end span").textContent;
  const priorityLevel = card.querySelector(".task-priority span").textContent;

  // Fill the modal fields
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
