function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(WIDTH, HEIGHT);
  canvas = document.getElementById("defaultCanvas0").getContext("2d");

  createInputAndButton("edit input button", "message text");
  createCornerButton("edit corner button");

}

function draw () { }