class World {

    background_sound = new Audio('audio/background.mp3');
    bottle_collision = new Audio('audio/aufprall_glas.mp3')
    character = new character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new statusbar();
    coinbar = new coinbar();
    bottlebar = new bottlebar();
    throwableObject = [];

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
            this.checkcollisions_collectable()
            this.checkcollisions_coin()
            this.checkThrowObject()
        }, 100);
    }

    throw() {
        setInterval(() => {
            this.checkcollisions_salsa_throw()
        }, 100);
    }

    checkThrowObject() {
        if (this.keyboard.d && this.bottlebar.percentage_bottle > 10) {
            if (this.character.otherDirection == true) {

            } else {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
                this.throwableObject.push(bottle);
                this.throw()
                this.bottlebar.setpercentage_bottle(-10)
            }
        }
    }

    checkcollisions_salsa_throw() {
        this.throwableObject.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    bottle.splashed = true;
                    this.bottle_collision.play();
                    enemy.hit()
                }
            })
        })
    }

    checkcollisions_coin() {
        this.level.collectable_coin.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coinbar.setpercentage_coin(10);
                coin.y = 1000;
            }
        })
    }

    checkcollisions_collectable() {
        this.level.collectable.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottlebar.setpercentage_bottle(10);
                bottle.y = 1000;
            }
        })
    }

    checkcollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (enemy.isdead == true) {

                } else {
                    this.character.hit();
                    this.statusBar.setpercentage_health(this.character.energy);
                }
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
        this.addObjectsToMap(this.level.collectable)
        this.addObjectsToMap(this.level.collectable_coin)
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
        mo.drawFrame(this.ctx);//for hitbox
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


