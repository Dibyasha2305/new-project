const messages = [
    "Drink water, woman. Hydration first.",
    "You’re amazing. But yes, take that break.",
    "Smile today. It's good for your wrinkles 😂",
    "Miss you, Ma. Call me if you’re free?",
    "You're killing it. Proud of you always.",
    "Reminder: You're not allowed to feel guilty for resting!"
  ];
  
  function showMessage() {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message-text').textContent = msg;
  }
  function addTodo() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    if (task !== "") {
      const list = document.getElementById("todo-list");
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(deleteBtn);
      list.appendChild(li);
      input.value = "";
    }
  }
  const deleteBtn = document.createElement("button");
deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
deleteBtn.style.marginLeft = "10px";
deleteBtn.onclick = () => li.remove();

function updateProgress() {
    const totalTasks = document.getElementsByTagName("li").length;
    const completedTasks = document.querySelectorAll("li.completed").length;
    const progress = (completedTasks / totalTasks) * 100;
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
  
    progressBar.value = progress;
    progressText.textContent = `${Math.round(progress)}% completed`;
  }
  
  // Update the progress bar when a task is marked as completed
  document.querySelectorAll("li").forEach(task => {
    task.addEventListener("click", () => {
      task.classList.toggle("completed");
      updateProgress();
    });
  });
  
  function setReminder(time, task) {
    const currentTime = new Date();
    const reminderTime = new Date(currentTime);
    reminderTime.setHours(time.split(":")[0]);
    reminderTime.setMinutes(time.split(":")[1]);
  
    const reminderMessage = `Reminder: ${task}`;
  
    setTimeout(() => {
      alert(reminderMessage);
    }, reminderTime.getTime() - currentTime.getTime());
  }
  function displayGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
  
    if (hour < 12) {
      greeting = "Good Morning, Supermom!";
    } else if (hour < 18) {
      greeting = "Good Afternoon, Wonderwoman!";
    } else {
      greeting = "Good Evening, Queen!";
    }
  
    const greetingElement = document.createElement("p");
    greetingElement.textContent = greeting;
    document.querySelector("main").prepend(greetingElement);
  }
  
  displayGreeting();
    
  const quotes = [
    "Believe in yourself. You're stronger than you think.",
    "Every day is a new beginning.",
    "Keep going. You're doing great!",
    "You are capable of amazing things.",
    "Don't stop when you're tired. Stop when you're done."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
  }
  function savePlanner() {
    const plannerText = document.getElementById('planner-text').value;
    localStorage.setItem('planner', plannerText);
  }
  function setUserName() {
    const userName = prompt("What's your name?");
    document.getElementById("user-greeting").textContent = `Hello, ${userName}!`;
  }
  function addTodo() {
    const priority = document.getElementById("task-priority").value;
    const task = document.getElementById("todo-input").value.trim();
    if (task !== "") {
      const list = document.getElementById("todo-list");
      const li = document.createElement("li");
      li.textContent = task;
      if (priority === "high") {
        li.style.backgroundColor = "red";
      } else if (priority === "medium") {
        li.style.backgroundColor = "yellow";
      } else {
        li.style.backgroundColor = "green";
      }
      list.appendChild(li);
    }
  }
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.start();

recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript;
  alert("You said: " + speechResult);
};
async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY");
    const data = await response.json();
    document.getElementById("weather").textContent = `Current weather: ${data.weather[0].description}`;
  }
  function addTodo() {
    const category = document.getElementById("task-category").value;
    const task = document.getElementById("todo-input").value.trim();
    if (task !== "") {
      const list = document.getElementById("todo-list");
      const li = document.createElement("li");
      li.textContent = `${category}: ${task}`;
      list.appendChild(li);
    }
  }
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      const list = document.getElementById("todo-list");
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
    });
  }
  
  function addTodo() {
    const task = document.getElementById("todo-input").value.trim();
    if (task !== "") {
      const list = document.getElementById("todo-list");
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
  function markCompleted(event) {
    const taskItem = event.target.closest("li");
    taskItem.style.textDecoration = event.target.checked ? "line-through" : "none";
  }
  if (Notification.permission === "granted") {
    new Notification("Reminder: Take your medicine!");
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Reminder: Take your medicine!");
      }
    });
  }
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  