function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(1200, 610);
  canvas = document.getElementById("defaultCanvas0").getContext("2d");

  createInputAndButton("edit me", true);
  createCornerButton("edit me");

}

function draw () { }