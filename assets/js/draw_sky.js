export default function sky() {
  let c = document.getElementById("sky");
  c.style.position = "absolute";
  c.style.zIndex = "-1"; // prova!!!!!!!!!!!!!!!

  var ctx = c.getContext("2d");
  var xMax = (c.width = window.screen.availWidth);
  var yMax = (c.height = window.screen.availHeight);

  var hmTimes = Math.round(xMax + yMax) / 3; // quantita' stelle rispetto ai lati di base Math.round(xMax + yMax)
  let yMaxCapped = (yMax / 3) * 1.8; // aggiunta da me per limitare il cielo ad un altezza minima cappata sull orizzonte
  for (var i = 0; i <= hmTimes; i++) {
    var randomX = Math.floor(Math.random() * xMax + 1); //calcolo x random xMax original
    var randomY = Math.floor(Math.random() * yMaxCapped + 1); //calcolo y random xMax original
    var randomSize = Math.floor(Math.random() * 2 + 1);
    var randomOpacityOne = Math.floor(Math.random() * 9 + 1);
    var randomOpacityTwo = Math.floor(Math.random() * 9 + 1);
    var randomHue = Math.floor(Math.random() * 360 + 1);
    if (randomSize > 1) {
      ctx.shadowBlur = Math.floor(Math.random() * 10 + 5);
      ctx.shadowColor = "white";
    }
    ctx.fillStyle =
      "hsla(" +
      randomHue +
      ", 30%, 80%, ." +
      randomOpacityOne +
      randomOpacityTwo +
      ")";
    ctx.fillRect(randomX, randomY, randomSize, randomSize);
  }
}
