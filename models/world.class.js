class World {

    character = new character();

    enemies = level1.enemies;

    clouds = level1.clouds;

    backgroundObject = level1.backgroundObject;

    canvas;

    ctx;

    keyboard;

    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.World = this;
    }


    draw() {
        ///////zum clearen vom canvis am anfang sonst würden sich die bilder doppelt dreifach anzeigen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //////////////

        this.ctx.translate(this.camera_x, 0)//für die camera verfolgung

        this.addObjectsToMap(this.backgroundObject)
        this.addObjectsToMap(this.clouds)
        this.addObjectsToMap(this.enemies)
        this.addToMap(this.character)

        this.ctx.translate(-this.camera_x, 0) //für die camera verfolgung

        //draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function () {
            self.draw()
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}