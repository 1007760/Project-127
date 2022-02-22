var song_1 = "";
var song_2 = "";

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(425, 230);
    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song_1 = loadSound("Happy.mp3");
    song_2 = loadSound("Pitbull.mp3");
}

function draw()
{
    image(video, 425, 230, 400, 400);
}