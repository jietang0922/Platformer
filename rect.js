class Rect {
    constructor(x, y, w, l, r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b
        this.x = x;
        this.y = y;
        this.w = w;
        this.l = l;
    }
    
    show() {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.l);
    }
}

