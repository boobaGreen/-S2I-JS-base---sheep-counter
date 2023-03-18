import sky from "./draw_sky.js";
import ground from "./ground.js";
import drawing_sheep from "./draw_sheep.js";
import sheepx from "./sheepx.js";
import calc_altezza from "./calc_altezza.js";

const screen = {
  smaller: null,
  phone: window.matchMedia("(min-width: 360px)"),
  tab_port: window.matchMedia("(min-width: 600px)"),
  tab_land: window.matchMedia("(min-width: 900px)"),
  default: window.matchMedia("(min-width: 1200px)"),
  big_desktop: window.matchMedia("(min-width: 1800px)"),
};

const PECOARRAY = [0, 1, 2, 3, 4, 1, 0];
let sheep_mode = "normal";
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
  let sheepbottom = calc_altezza(frame, hground, sheep_mode);
  drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
  //  add media query events
  for (let [scr, mq] of Object.entries(screen)) {
    if (mq) mq.addEventListener("change", mqHandler);
  }
  // first event
  mqHandler();
  // addEventListener
  incrementButton.addEventListener("click", incrementCounter);
  decrementButton.addEventListener("click", decrementCounter);
  resetButton.addEventListener("click", resetCounter);

  window.addEventListener("resize", function (event) {
    mqHandler();
  });

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
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
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
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
    button.play();
    displayNumber.innerHTML = counter;
    //se verso allora il frame zero si comporta in n modo se altro verso in un altro
  }

  // function - reset value
  function resetCounter() {
    counter = 0;
    frame = 0;
    sheepleft = sheepx(frame);
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
    buttonrst.play();
    displayNumber.innerHTML = counter;
  }
  // media query handler function
  function mqHandler() {
    let size = null;
    for (let [scr, mq] of Object.entries(screen)) {
      if (!mq || mq.matches) size = scr;
    }
    console.log(size);
    sheepleft = sheepx(frame);
    hground = ground();
    console.log("hground :", hground);
    if (hground < 157) {
      sheep_mode = "short";
    } else {
      sheep_mode = "normal";
    }
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    ground(sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
    console.log(sheep_mode, "sheep mode in mqhandler"); // cosa fare nella funzione resize!!!
  }
}
