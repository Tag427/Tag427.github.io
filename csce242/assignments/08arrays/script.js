/* I got all of the images from google not one specific place or website */
const BEFORE = {
  "McLaren MCL38 Livery": "images/mclaren-before.webp",
  "Ferrari SF-25 Livery": "images/ferrari-before.webp",
  "Red Bull RB21 Livery": "images/redbull-before.jpg",
  "Mercedes W16 Livery": "images/mercedes-before.webp"
};

const AFTER = {
  "McLaren MCL38 Livery": "images/mclaren-after.jpg",
  "Ferrari SF-25 Livery": "images/ferrari-after.avif",
  "Red Bull RB21 Livery": "images/redbull-after.avif",
  "Mercedes W16 Livery": "images/mercedes-after.png"
};

const gallery = document.getElementById("gallery");

const buildCards = () => {
  gallery.innerHTML = "";
  for (const name in BEFORE) {
    const src = BEFORE[name];
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${name}`;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = `View ${name}`;

    card.appendChild(img);
    card.appendChild(overlay);
    card.onclick = () => openPopup(name);
    gallery.appendChild(card);
  }
};

buildCards();

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.getElementById("close");

const openPopup = (name) => {
  const afterSrc = AFTER[name];
  popupTitle.textContent = `${name.replace("Livery", "Special Livery")}`;
  popupImg.src = afterSrc;
  popupImg.alt = popupTitle.textContent;
  popup.classList.remove("hidden");
};

closeBtn.onclick = () => {
  popup.classList.add("hidden");
  popupImg.src = "";
  popupTitle.textContent = "";
};

popup.onclick = (evt) => {
  if (evt.target === popup) closeBtn.onclick();
};
