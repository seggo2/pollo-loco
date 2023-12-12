class Cloud extends MovableObject {
    y = 30;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage(' img/5_background/layers/4_clouds/1.png')
        this.x = 400 + Math.random() * 2000;
        this.animate()

    }

    animate() {
        setInterval(() => {
        this.moveLeft();
    }, 1000 / 60)
    }
}