class ThrowableObject extends MovableObject {
    
    
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.x =x;
        this.y =y;
        this.height=80;
        this.width=80;
        this.throw();
    }
    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x +=20;
        }, 25);
    }
}