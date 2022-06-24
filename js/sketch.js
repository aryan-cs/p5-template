function setup () {

  createCanvas(Math.floor(window.innerWidth / SCALE), Math.floor(window.innerHeight / SCALE));

}

function draw () {

  background(ACCENT_2);
  
}

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {

  if (VARIABLE_SCALING) { resizeCanvas(Math.floor(limit(window.innerWidth / SCALE, 1000, 1200)), Math.floor(limit(window.innerWidth / SCALE, 580, 610))); }

}, true);