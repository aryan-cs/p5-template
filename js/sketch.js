function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(WIDTH, HEIGHT);

  createInputAndButton("edit input button", "message text");
  createCornerButton("edit corner button");

}

function draw () {}