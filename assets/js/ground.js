export default function ground(sheep_mode) {
  let c = document.getElementById("canvas-generalsheep");
  c.style.zIndex = "-1";

  let ctx = c.getContext("2d");

  let wground = document.documentElement.clientWidth;
  let hground = Math.trunc(wground / 5.727891156462585);
  if (sheep_mode == "short") {
    hground = hground * 1.5;
  }
  c.width = wground;
  //console.log(w, "w");
  //console.log(h, "h");
  //quote 842/147 original size ground =5,7278911564625850
  c.height = hground;

  //console.log(c.height);
  const img = new Image();
  img.onload = () => {
    //ctx.clearRect(0, 0, xMax, yMax); // pulizia ground precedente se necessario
    c.style.position = "absolute";
    c.style.bottom = 0 + "px"; // posizione ground dal basso
    c.style.left = 0 + "px"; // posizione ground da sx
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(img, 0, 147, 842, -147, 0, 0, wground, c.height);
  };
  img.src = "assets/img/groundtransp.png"; //sorgente foto groundtransparent
  return hground;
}
