import createGeneralElement from "./create-general.js";
import {
  addElement,
  addElementInsideCounterNameSection,
  addElementInsideCounterButtonSection,
} from "./add-box.js";
import { main } from "./main.js";

async function init() {
  // const counterMainDiv = document.getElementById("counter");
  createGeneralElement("canvas", "sky", "");
  createGeneralElement("div", "counter", "");
  addElement("div", "display-number", "0");
  addElement("div", "button-container", "");
  addElement("div", "sheep", "");
  addElementInsideCounterNameSection("canvas", "canvas-generalsheep", "pecora");
  addElementInsideCounterNameSection("canvas", "canvas-sheep", "pecora");
  addElementInsideCounterButtonSection("button", "button-increment", "+");
  addElementInsideCounterButtonSection("button", "button-reset", "reset");
  addElementInsideCounterButtonSection("button", "button-decrement", "-");
  main();
}
window.onload = init;
