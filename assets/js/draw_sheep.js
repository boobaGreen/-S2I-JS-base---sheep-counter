export default function drawing_sheep(frame, bottom, left, sheep_mode) {
  let c = document.getElementById("canvas-sheep");
  let ctx = c.getContext("2d");
  //842/121=6,9586776859504132231404958677686 original pecorelle ratio
  let wwindows = document.documentElement.clientWidth;

  let w = Math.trunc(wwindows / 6.9586776859504132231404958677686);
  if (sheep_mode == "short") {
    w = w * 1.5;
  }
  let h = w;
  c.height = h;
  c.width = w;

  const img = new Image();
  img.onload = () => {
    c.style.position = "absolute";
    c.style.bottom = bottom + "px"; // posizione pecora dal basso PASSATA in func
    c.style.left = left + "px"; // posizione pecora da sx PASSATA in func
    ctx.drawImage(img, frame * 121, 0, 121, 121, 0, 0, w, h);
  };
  img.src = "assets/img/whitetransppeco.png"; //sorgente foto groundtransparent
}
