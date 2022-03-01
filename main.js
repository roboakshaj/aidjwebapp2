music2="music.mp3";
music3="music2.mp3";

function preload(){
loadSound(music2);
loadSound(music3);
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){

}