var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bX = 10;
var bY = 100;
var bg = new Image();
var pN = new Image();
var pS = new Image();

var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

bird.src = "bird.png";
bg.src = "background.png";
pN.src = "pipeNorth.png";
pS.src = "pipeSouth.png";

document.addEventListener("keydown", moveUp);
function moveUp(e){
    bY -= 20;
    console.log('bY:' + bY);
}

function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,bX,bY);
    //ctx.drawImage(pN,300,0);
    //ctx.drawImage(pS,300,150);

    for(var i=0; i<pipe.length; i++){
        //console.log('pipe.length:' + pipe.length);
        ctx.drawImage(pN, pipe[i].x, pipe[i].y);
        ctx.drawImage(pS, pipe[i].x, pipe[i].y+pN.height+90);
        pipe[i].x--;
        //console.log('pipe[i].x:' + pipe[i].x);

        if(pipe[i].x == 100){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pN.height)-pN.height
            })
        }
    }
    bY += 1;

    requestAnimationFrame(draw);
}

draw();