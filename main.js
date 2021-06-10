xaxis = 0;
yaxis = 0;
function preload(){

}
function setup(){
cnvs = createCanvas(1000, 800);
cnvs.position(400, 300);
cap = createCapture(VIDEO);
  cap.size(800,600);
  cap.hide();
  poseNet = ml5.poseNet(cap, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw(){
  
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