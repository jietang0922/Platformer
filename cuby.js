class Cuby extends Rect {

    constructor(x, y, r, g, b) {
        super(x, y, 30, 30, r, g, b);
        this.acceleration = 0.7;
        this.gravity = -0.5;
        this.velocityY = 0;
        this.velocityX = 0;
        this.maxX = 3.5;
        this.lift = 9;
        this.mu = 0.4;
        this.moving = false;
        this.direction = 0;
        this.error = 0.2;
        this.above_obstacle = false;
    }

    collision(obstacle) {
        return this.y + this.l > obstacle.y && this.y < obstacle.y + obstacle.l && this.x + this.w > obstacle.x && this.x < obstacle.x + obstacle.w;
    }

    collide(obstacle) {
        switch(obstacle.cube) {
            case 0: //left
                this.x = obstacle.x - this.w;
                this.velocityX = 0;
                break;
            case 1: //up
                this.above_obstacle = true;
                this.y = obstacle.y - this.l;
                this.velocityY = 0;
                break;
            case 2: //right
                this.x = obstacle.x + obstacle.w;
                this.velocityX = 0;
                break;
            case 3: //down
                this.y = obstacle.y + obstacle.l;
                this.velocityY = 0;
                break;
        }
    }

    update() {
        this.y -= this.velocityY;
        this.velocityY += this.gravity;
        if(this.direction != 0) this.x += this.velocityX;

        //sets direction
        if(this.velocityX > this.error) {
            this.direction = 1;
        } else if(this.velocityX < -this.error) {
            this.direction = -1;
        } else {
            this.direction = 0;
        }
        //friction
        if(this.direction > 0) {
            this.velocityX -= this.mu;
        } else if(this.direction < 0) {
            this.velocityX += this.mu;
        }
        //max velocity
        if(this.velocityX > this.maxX) {
            this.velocityX = this.maxX;
        }
        if(this.velocityX < -this.maxX) {
            this.velocityX = -this.maxX;
        }
        //borders
        if(this.y > height - this.l) {
            this.y = height - this.l;
            this.velocityY = 0;
        }
        if(this.y < 0) {
            this.y = 0;
            this.velocityY = 0;
        }
        if(this.x < 0) {
            this.x = 0;
            this.velocityX = 0;
        }
        if(this.x > width - this.w) {
            this.x = width - this.w;
            this.velocityX = 0;
        }
        this.above_obstacle = false;
    }



    jump() {
        if(this.touch() != "n") {
            this.velocityY += this.lift;
        }
    }

    touch() {
        if(this.y == height - this.l) {
            return "y";
        } else if(this.above_obstacle) {
            return "o";
        } else {
            return "n";
        }
    }

    left() {
        this.velocityX -= this.acceleration;
    }

    right() {
        this.velocityX += this.acceleration;
    }

    
}