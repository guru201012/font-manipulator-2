nosex=0
nosey=0
function setup(){
    canvas=createCanvas(550,360);
    canvas.position(550,120);
    video=createCapture(VIDEO);
    video.size(550,360);
    video.position(21,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initalized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey"+nosey);
    }
}
function draw(){
    background('#ff3d03');
}