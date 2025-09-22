/* Menu toggle */
const toggleBtn = document.getElementById("toggle-btn");
const navList = document.getElementById("nav-list");

toggleBtn.onclick = () => {
  navList.classList.toggle("hidden");
  toggleBtn.textContent = navList.classList.contains("hidden") ? "▼" : "▲";
};

const ex1 = document.getElementById("exercise1");
const ex2 = document.getElementById("exercise2");
document.getElementById("link-ex1").onclick = () => {
  ex1.classList.remove("hidden");
  ex2.classList.add("hidden");
};
document.getElementById("link-ex2").onclick = () => {
  ex2.classList.remove("hidden");
  ex1.classList.add("hidden");
};

/* Exercise 1 */
const daysRange  = document.getElementById("days-range");
const plantDays  = document.getElementById("plant-days");
const plantText  = document.getElementById("plant-text");
const plantImg   = document.getElementById("plant-img");

const updatePlant = () => {
  const days = parseInt(daysRange.value);
  plantDays.textContent = `It's been ${days} day${days === 1 ? "" : "s"} since watering your plant.`;

  let msg = "";
  let img = "images/plant-happy.png";

  if (days <= 2) {
    msg = "Your plant is healthy and happy";
    img = "images/plant-happy.png";
  } else if (days <= 5) {
    msg = "Your plant needs watering";
    img = "images/plant-thirsty.png";
  } else if (days <= 9) {
    msg = "Leaves are changing, water soon";
    img = "images/plant-sick.png";
  } else {
    msg = "Sorry, your plant is no longer with us";
    img = "images/plant-dead.png";
  }

  plantText.textContent = msg;
  plantImg.src = img;
};

daysRange.oninput = updatePlant;
updatePlant();

/* Exercise 2 */
/* Used a method from stack overflow as a reference for this */
const clockTime = document.getElementById("clock-time");

const updateClock = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  if (m < 10) m = "0" + m;
  clockTime.textContent = `${h}:${m} ${ampm}`;
};

updateClock();
setInterval(updateClock, 60000);
