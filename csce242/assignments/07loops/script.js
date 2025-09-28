
const btnDraw = document.getElementById("btn-draw");
const scene   = document.getElementById("scene");

function leftPositionPercent(index, total) {
  const start = 6;
  const end   = 94;
  const step  = (end - start) / (total - 1);
  return start + step * index;
}

btnDraw.onclick = () => {
  scene.innerHTML = "";
  scene.classList.remove("day", "night");
  const hour = new Date().getHours();
  const isNight = (hour >= 18 || hour < 6);
  scene.classList.add(isNight ? "night" : "day");
  const celestial = document.createElement("div");
  celestial.className = isNight ? "moon" : "sun";
  scene.appendChild(celestial);

  const CLOUD_COUNT = 6;
  for (let i = 0; i < CLOUD_COUNT; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.left = leftPositionPercent(i, CLOUD_COUNT) + "%";
    cloud.style.transform = "translateX(-50%)";
    scene.appendChild(cloud);
  }

  const TREE_COUNT = 6;
  for (let i = 0; i < TREE_COUNT; i++) {
    const tree = document.createElement("div");
    tree.className = "tree";
    const canopy = document.createElement("div");
    canopy.className = "canopy";
    const trunk = document.createElement("div");
    trunk.className = "trunk";
    tree.appendChild(canopy);
    tree.appendChild(trunk);
    tree.style.left = leftPositionPercent(i, TREE_COUNT) + "%";
    tree.style.transform = "translateX(-50%)";
    scene.appendChild(tree);
  }
};
