import managedData from "./src/data";

const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

managedData.forEach(createBox);

//Create speech boxes

function createBox(item) {
  console.log(item);
}
