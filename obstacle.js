class Obstacle extends Rect {
    constructor(type, x, y, w, l) {
        if(type == "wall") super(x, y, w, l, 255, 255, 255);
        this.type = type;
        this.cube = NaN;
    }
} 