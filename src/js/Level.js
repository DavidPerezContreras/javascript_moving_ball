import { Player } from '../entities/Player.js';
import { keys } from '../utils/input.js';

class Level1 {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(50, 50, 50, 50, 'blue');
    }

    update(deltaTime) {
        this.player.update(deltaTime, keys);
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.player.render(this.ctx);
    }
}

export {Level1}
