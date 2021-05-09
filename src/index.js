import managedData from "./data";
import "./styles/style.css";

const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

managedData.forEach(createBox);

//Create speech boxes

function createBox(item) {
  const box = document.createElement("div");

  const { image, word } = item;

  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${word}"/>
    <p class="info">${word}</p>
  `;

  // todo - speak event

  main.appendChild(box);
}
