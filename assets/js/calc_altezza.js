export default function calc_altezza(frame, hground) {
  let output;
  if (frame == 3) {
    output = hground;
  } else if (frame == 4 || frame == 2) {
    output = hground * 0.75; ////kostant
  } else {
    output = Math.trunc(hground / 10);
  }
  return output;
}
