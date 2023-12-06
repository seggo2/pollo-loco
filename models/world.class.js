class World {

    character = new character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new statusbar();
    coinbar= new coinbar();
    bottlebar= new bottlebar();
    throwableObject = [];
    background_sound = new Audio('audio/background.mp3')

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.World = this;
    }

    run() {
        setInterval(() => {
            this.checkcollisions()
            this.checkThrowObject()
        }, 100);
    }

    checkThrowObject() {
        if (this.keyboard.d) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
        }
    }

    checkcollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setpercentage_health(this.character.energy);
            }
        })
    }
    draw() {
        ///////zum clearen vom canvis am anfang sonst würden sich die bilder doppelt dreifach anzeigen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.ctx.translate(this.camera_x, 0)//für die camera verfolgung

        this.addObjectsToMap(this.level.backgroundObject)
        this.addObjectsToMap(this.level.clouds)
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.throwableObject)

        //fir not movable things
        this.ctx.translate(-this.camera_x, 0)
        this.addToMap(this.statusBar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.ctx.translate(this.camera_x, 0)
        /////////////

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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
}


