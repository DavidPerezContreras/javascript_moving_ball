import { Level1 } from './scenes/Level1.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let lastTime = 0;
const level1 = new Level1(ctx);

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    level1.update(deltaTime);
    level1.render();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
