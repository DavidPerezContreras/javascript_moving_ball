const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 1
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}



function moveLeft(){
    ball.x -= ball.speed;
}
function moveRight(){
    ball.x += ball.speed;
}
function moveUp(){
    ball.y -= ball.speed;
}
function moveDown(){
    ball.y += ball.speed;
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBallPosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();
