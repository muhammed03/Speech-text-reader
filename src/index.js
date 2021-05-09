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

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

//Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

//Toggle text box
function toggleSwitch() {
  document.getElementById("text-box").classList.toggle("show");
}
toggleBtn.addEventListener("click", toggleSwitch);
closeBtn.addEventListener("click", toggleSwitch);

getVoices();
