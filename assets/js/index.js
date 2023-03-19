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

  addElement("div", "button-container", "");
  addElement("div", "display-number", "GoodNight Counter");

  addElement("div", "sheep", "");
  addElementInsideCounterNameSection("canvas", "canvas-generalsheep", "pecora");
  addElementInsideCounterNameSection("canvas", "canvas-sheep", "pecora");
  addElementInsideCounterButtonSection("button", "button-decrement", "-");
  addElementInsideCounterButtonSection("button", "button-reset", "reset");
  addElementInsideCounterButtonSection("button", "button-increment", "+");

  main();
}
window.onload = init;
