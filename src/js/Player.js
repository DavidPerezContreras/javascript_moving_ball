import { GameObject } from './GameObject.js';

export class Player extends GameObject {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
        this.speed = 100;
    }

    update(deltaTime, keys) {
        if (keys['ArrowLeft']) this.x -= this.speed * deltaTime / 1000;
        if (keys['ArrowRight']) this.x += this.speed * deltaTime / 1000;
        if (keys['ArrowUp']) this.y -= this.speed * deltaTime / 1000;
        if (keys['ArrowDown']) this.y += this.speed * deltaTime / 1000;
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    }
}
