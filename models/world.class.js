class World {
    characters = new character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }


    draw() {
        this.ctx.drawImage(this.characters.img, this.characters.x, this.characters.y, this.characters.width, this.characters.height)
    }
}