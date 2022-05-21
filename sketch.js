var cuby;
const obstacles = [];

function setup() {
    createCanvas(1080, 540);
    cuby = new Cuby(30, 360, 0, 255, 255);
    obstacles.push(new Obstacle("wall", 500, 480, 60, 40));
    obstacles.push(new Obstacle("wall", 300, 450, 60, 40));
}

function draw() {
    background(0);
    let check = true;
    let collided;
    cuby.show();
    cuby.update();
    
    for(let obstacle of obstacles) {
        obstacle.show();
        if(cuby.x + cuby.w < obstacle.x) obstacle.cube = 0; //left
        else if(cuby.y + cuby.l < obstacle.y) obstacle.cube = 1; //up
        else if(cuby.x > obstacle.x + obstacle.w) obstacle.cube = 2; //right
        else if(cuby.y > obstacle.y + obstacle.l) obstacle.cube = 3; //down
        if(check && cuby.collision(obstacle)) {
            check = false;
            collided = obstacle;
        }
    }
    
    if(collided != null) cuby.collide(collided);

    




    console.log()
    if(keyIsDown(LEFT_ARROW)) {
        cuby.left();
    } else if(keyIsDown(RIGHT_ARROW)) {
        cuby.right();
    }
    if(keyIsDown(UP_ARROW)) {
        cuby.jump();
    }
}       