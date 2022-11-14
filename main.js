rx=0;
lx=0;
noseX=0;
noseY=0;
diff=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{
    background('#17CBBB');
    fill('#CC0605');
    stroke('#CC0615');
    square(noseX,noseY,diff);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        lx=results[0].pose.leftWrist.x;
        rx=results[0].pose.rightWrist.x;
        diff=floor(lx-rx);
    }
}