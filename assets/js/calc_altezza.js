export default function calc_altezza(frame, hground, mode_sheep) {
  let output;

  //parte che fa in tutte le modalita'
  if (frame == 3) {
    output = hground * 0.8;
  } else if (frame == 4 || frame == 2) {
    output = hground * 0.6; ////costant
  } else {
    output = Math.trunc(hground / 10);
  }

  if (mode_sheep == "short") {
    output = output * 1.5;
  }
  return output;
}
