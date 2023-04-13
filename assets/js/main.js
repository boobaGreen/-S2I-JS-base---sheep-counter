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

const TITOLI = [];
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
  let buttonrst = new Audio("assets/audio/beecutvoldwn.mp3");
  let tapelow = new Audio("assets/audio/lowtape.mp3");
  //bee=

  // Setting counter's initial value
  //let counter = 999999;
  let counter = 0;
  let frame = 0;

  let sheepleft = sheepx(frame);
  let sheepbottom = calc_altezza(frame, hground, sheep_mode);

  //  add media query events
  for (let [scr, mq] of Object.entries(screen)) {
    if (mq) mq.addEventListener("change", mqHandler);
  }
  // first event
  mqHandler();
  // addEventListener
  incrementButton.addEventListener("pointerdown", incrementCounter);
  decrementButton.addEventListener("pointerdown", decrementCounter);
  resetButton.addEventListener("pointerdown", resetCounter);

  window.addEventListener("resize", function (event) {
    mqHandler();
  });
  let countelement = document.getElementById("counter");
  incrementButton.addEventListener("mouseup", (event) => {});
  onpointerup = (event) => {
    countelement.style.boxShadow = "5px 5px 5px 5px rgba(0, 0, 0, 0.25)";
  };

  ////////////////////////////////
  /* --- function section --- */

  /* function time color for border when button pressed*/
  /*  function colortime() {
    let countelement = document.getElementById("counter");
    setTimeout(() => {
      countelement.style.boxShadow = "5px 5px 5px 5px rgba(0, 0, 0, 0.25)";
    }, "100");
  } */
  // function - increment value

  function incrementCounter() {
    //let c = document.getElementById("counter");
    console.log("sono dentro counter normal clik");
    countelement.style.boxShadow = "6px 6px 6px 6px rgba(133, 243, 74, 0.92)";
    // colortime();
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
    tapelow.play();
    displayNumber.innerHTML = counter;
    //se verso allora il frame zero si comporta in n modo se altro verso in un altro
    //let c = document.getElementById("counter");
    countelement.style.boxShadow = "6px 6px 6px 6px rgba(242, 97, 124, 0.92)";
    // colortime();
  }

  // function - reset value
  function resetCounter() {
    counter = 0;
    frame = 0;
    sheepleft = sheepx(frame);
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
    buttonrst.play();
    displayNumber.innerHTML = "GoodNight Counter";
    //let c = document.getElementById("counter");
    countelement.style.boxShadow = "6px 6px 6px 6px rgba(113, 185, 239, 0.92)";
    // colortime();
  }
  // media query handler function
  function mqHandler() {
    let canc = document.getElementById("canvas-generalsheep");
    let cancctx = canc.getContext("2d");
    cancctx.clearRect(0, 0, canc.width, canc.height);
    let size = null;
    for (let [scr, mq] of Object.entries(screen)) {
      if (!mq || mq.matches) size = scr;
    }

    sheepleft = sheepx(frame);
    hground = ground();
    if (hground < 157) {
      sheep_mode = "short";
    } else {
      sheep_mode = "normal";
    }
    sheepbottom = calc_altezza(frame, hground, sheep_mode);
    sky();

    ground(sheep_mode);
    drawing_sheep(PECOARRAY[frame], sheepbottom, sheepleft, sheep_mode);
  }
}
