const DATA_URL = "https://tag427.github.io/projects/part6/json/circuits.json";

async function getCircuits() {
  try {
    const res = await fetch(DATA_URL);
    return res.json();
  } catch (e) {
    console.log("Issue");
    return [];
  }
}

const showCircuits = async () => {
  const circuits = await getCircuits();
  const grid = document.querySelector(".circuits-grid");
  if (!grid) return;

  grid.innerHTML = "";

  circuits.forEach((circuit) => {
    const section = document.createElement("article");
    section.classList.add("circuit-card");

    const fig = document.createElement("figure");
    fig.classList.add("thumb");
    const img = document.createElement("img");
    img.src = `../${circuit.img_name}`;
    img.alt = `${circuit.name} track map`;
    fig.append(img);

    const h3 = document.createElement("h3");
    h3.textContent = circuit.name;

    const pLoc = document.createElement("p");
    pLoc.classList.add("location");
    pLoc.textContent = circuit.location;

    const a = document.createElement("a");
    a.classList.add("btn");
    a.href = `${circuit.slug}-about.html`;
    a.textContent = "View Circuit";

    section.append(fig, h3, pLoc, a);
    grid.append(section);
  });
};

showCircuits();
