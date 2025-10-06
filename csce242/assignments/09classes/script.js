class Painting {
  constructor(name, artist, imgUrl, framed = false) {
    this.name = name;
    this.artist = artist;
    this.imgUrl = imgUrl;
    this.framed = framed;
  }

  makeCard = () => {
    const card = document.createElement("article");
    card.className = "card";
    card.title = `${this.name} — by ${this.artist}`;

    const img = document.createElement("img");
    img.src = this.imgUrl;
    img.alt = `${this.name} by ${this.artist}`;

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = this.name;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = "View Livery";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(overlay);

    // Open modal on click
    card.onclick = () => openModal(this);

    return card;
  };
}

const PAINTINGS = [
  new Painting("Mclaren Livery", "Mclaren", "images/mclaren-after.jpg", false),
  new Painting("Ferrari Livery", "Ferrari", "images/ferrari-after.avif", true),
  new Painting("Mercedes Livery", "Mercedes", "images/mercedes-after.png", false),
  new Painting("Redbull Livery", "Redbull", "images/redbull-after.avif", true),
  new Painting("VCarb Livery", "VCarb", "images/vcarb-after.jpg", false),
];

const gallery = document.getElementById("gallery");
const renderGallery = () => {
  gallery.innerHTML = "";
  for (const p of PAINTINGS) {
    gallery.appendChild(p.makeCard());
  }
};
renderGallery();

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const imageWrap = document.getElementById("image-wrap");
const btnClose = document.getElementById("btn-close");

const openModal = (painting) => {
  modalTitle.textContent = painting.name;
  modalArtist.textContent = `by ${painting.artist}`;

  imageWrap.innerHTML = "";
  const img = document.createElement("img");
  img.src = painting.imgUrl;
  img.alt = `${painting.name} by ${painting.artist}`;
  img.className = "modal-img";

  if (painting.framed) {
    const frame = document.createElement("div");
    frame.className = "frame";
    frame.appendChild(img);
    imageWrap.appendChild(frame);
  } else {
    imageWrap.appendChild(img);
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
};

btnClose.onclick = () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  imageWrap.innerHTML = "";
};

modal.onclick = (evt) => {
  if (evt.target === modal) btnClose.onclick();
};
