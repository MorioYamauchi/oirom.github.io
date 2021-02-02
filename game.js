var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bX = 10;
var bY = 145;
var bg = new Image();
var pN = new Image();
var pS = new Image();

var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

bird.src = "./image/bird.png";
bg.src = "./image/background.png";
pN.src = "./image/pipeNorth.png";
pS.src = "./image/pipeSouth.png";

var bY_prev = bY;
var F = 1;
var V = 0;
var A = 0.3;
var canJump = true;
document.addEventListener("keydown", moveUp);
function moveUp(e){
    if(canJump){
        V = -8;
        canJump = false;
    }
}

function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,bX,bY);
    //ctx.drawImage(pN,300,0);
    //ctx.drawImage(pS,300,150);

    for(var i=0; i<pipe.length; i++){
        ctx.drawImage(pN, pipe[i].x, pipe[i].y);
        ctx.drawImage(pS, pipe[i].x, pipe[i].y+pN.height+90);
        pipe[i].x--;
        
        if(bX + bird.width == pipe[i].x && bY + bird.height >= pipe[i].y + pN.height + 90){
            alert("Hit!!");
            //console.log("Hit");
            //console.log(bX + bird.width, pipe[i].x);
            //console.log(bY + bird.height, pipe[i].y+pN.height+90);
        }

        if(pipe[i].x == 100){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pN.height)-pN.height
            })
        }
    }

    if(bY<=145&&!canJump){
        V += A;
        bY += V;
    }

    if(bY>145){
        bY = 145;
        V = 0;
        canJump = true;
    }

    requestAnimationFrame(draw);
}

draw();