// Sunny Times
const sunnyPanel = document.getElementById("sunny-panel");
const lyricsBox = document.getElementById("lyrics");
const LINES = [
  "Here comes the sun",
  "Sun",
  "Sun",
  "Sun",
  "Here it comes"
];

sunnyPanel.onclick = () => {
  let html = "";
  for (const line of LINES) {
    html += `<p>${line}</p>`;
  }
  lyricsBox.innerHTML = html;
};

// Color Select
const colorInput = document.getElementById("color-input");
const colorPreview = document.getElementById("color-preview");
const colorCode = document.getElementById("color-code");

colorInput.oninput = () => {
  const hex = colorInput.value.toLowerCase();
  colorPreview.style.color = hex;
  colorCode.innerHTML = hex;
};

// Image Change
const weatherImg = document.getElementById("weather-img");
const CLOUDY_SRC = "images/cloudy.png";
const SUNNY_SRC = "images/sunny.png";

weatherImg.onclick = () => {
  if (weatherImg.src.indexOf("cloudy.png") !== -1) {
    weatherImg.src = SUNNY_SRC;
    weatherImg.alt = "Smiling sun";
  } else {
    weatherImg.src = CLOUDY_SRC;
    weatherImg.alt = "Cloudy sky";
  }
};
