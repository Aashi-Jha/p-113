function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(400,150);

    video=createCapture(VIDEO);
   video.hide();
}
function draw(){
    image(video,0,0,640,480);
   
    stroke(168,10,10);
    fill(170,10,10);

   circle(40,30,50);
   circle(40,450,50);
   circle(600,450,50);
   circle(600,30,50);

   stroke(50,168,82);
   fill(50,170,10);

   rect(60,18,517,30);
   rect(60,438,517,30);
   rect(27,50,25,380);
   rect(590,50,25,380);
}
function take_snapshot(){
    save('frame.png');
}