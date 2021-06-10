xaxis = 0;
yaxis = 0;
function preload(){
imageholder = loadImage("https://i.postimg.cc/pdcrVSpC/moustacheimage-removebg-preview.png");
}
function setup(){
   canassign = createCanvas(800,600);
  // canassign.center();
  canassign.position(500,300);
  cap = createCapture(VIDEO);
  cap.size(800,600);
  cap.hide();
  poseNet = ml5.poseNet(cap, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw(){
    image(cap, 0, 0, 800, 600);
    stroke(102, 153, 153);
    fill(0, 49, 83);
    //circle( xaxis, yaxis, 20);
      image(imageholder, xaxis - 30, yaxis + 5, 69, 69);   
}
function modelLoaded(){
  console.log("poseNet is loaded");
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);  
    xaxis = results[0].pose.nose.x;
    yaxis = results[0].pose.nose.y;
    console.log("xaxis ="+xaxis+"");
    console.log("yaxis ="+yaxis+"");
  }
  
}
function tkesnpsht(){
  save("Moustache_filter.png");
}