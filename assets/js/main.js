import sky from "./draw_sky.js";
import ground from "./ground.js";
import drawing_sheep from "./draw_sheep.js";
import sheepx from "./sheepx.js";
import calc_altezza from "./calc_altezza.js";
const PECOARRAY = [0, 1, 2, 3, 4, 1, 0];

export function main() {
  sky();
  let hground = ground();

  // Getted elements
  let incrementButton = document.getElementById("button-increment");
  let decrementButton = document.getElementById("button-decrement");
  let resetButton = document.getElementById("button-reset");
  let displayNumber = document.getElementById("display-number");

  //Audio Section
  let button = new Audio("assets/audio/swing.mp3");
  let buttonrst = new Audio("assets/audio/sheep.mp3");
  //bee=

  // Setting counter's initial value
  //let counter = 999999;
  let counter = 0;
  let frame = 0;
  let sheepleft = sheepx(frame);
  let sheepbottom = calc_altezza(frame, hground);
  drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft);

  // addEventListener
  incrementButton.addEventListener("click", incrementCounter);
  decrementButton.addEventListener("click", decrementCounter);
  resetButton.addEventListener("click", resetCounter);

  /* --- function section --- */

  // function - increment value
  function incrementCounter() {
    if (counter > 999999) {
      counter = -1;
    }
    counter++;
    frame++;
    if (frame == 7) {
      frame = 0;
    }
    sheepleft = sheepx(frame);
    sheepbottom = calc_altezza(frame, hground);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft);
    button.play();
    displayNumber.innerHTML = counter;
  }

  // function - decrement value
  function decrementCounter() {
    if (counter < -999999) {
      counter = 1;
    }
    counter--;
    frame--;
    if (frame == -1) {
      frame = 6;
    }

    sheepleft = sheepx(frame);
    sheepbottom = calc_altezza(frame, hground);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft);
    button.play();
    displayNumber.innerHTML = counter;
    //se verso allora il frame zero si comporta in n modo se altro verso in un altro
  }

  // function - reset value
  function resetCounter() {
    counter = 0;
    frame = 0;
    sheepleft = sheepx(frame);
    sheepbottom = calc_altezza(frame, hground);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft);
    buttonrst.play();
    displayNumber.innerHTML = counter;
  }
}
