const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 1
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(player
    .x, player
    .y, player
    .radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}



function moveLeft(){
    player
.x -= player
.speed;
}
function moveRight(){
    player
.x += player
.speed;
}
function moveUp(){
    player
.y -= player
.speed;
}
function moveDown(){
    player
.y += player
.speed;
}



function updateBallPosition() {
    if (keys['ArrowLeft']) {
        moveLeft();
    }
    if (keys['ArrowRight']) {
        moveRight();
    }
    if (keys['ArrowUp']) {
        moveUp();
    }
    if (keys['ArrowDown']) {
        moveDown();
    }
}

const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    console.log("key down ="+e.key);
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    console.log("key up ="+e.key);
});


function gameLoop() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBallPosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();
