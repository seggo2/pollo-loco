class World {
    bottle_collision = new Audio('audio/aufprall_glas.mp3')
    throw_sound = new Audio('audio/wurf.mp3')
    character = new character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new statusbar();
    coinbar = new coinbar();
    bossbar = new endbossBar();
    bottlebar = new bottlebar();
    throwableObject = [];
    throwtime = null;
    mute = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    /**
     * settes the character in the world class
     */
    setWorld() {
        this.character.World = this;
    }
    /**
    * checks in an intervall the collisions when the character walks 
     */
    run() {
        setInterval(() => {
            if (this.endboss.hadFirstContact == true) {
                this.bossbar.x = 520;
            }
            this.checkcollisions();
            this.checkcollisions_collectable();
            this.checkcollisions_coin();
            this.checkThrowObject();
            this.checkcollisions_endboss();
        }, 100);
    }
    /**
     * checks in an intervall the collisions 
     */
    throw() {
        setInterval(() => {
            this.checkcollisions_salsa_throw();
        }, 100);
    }
    /**
     * functions for throwobject pushes a bottle to the array
     */
    checkThrowObject() {
        let atackTime = new Date().getTime();
        let atackSpeed = (atackTime - this.throwtime) / 1000;
        if (this.keyboard.d && this.bottlebar.percentage_bottle > 10) {
            if (!this.character.otherDirection) {
                if (atackSpeed > 0.6 || this.throwtime == null) {
                    let bottle = new ThrowableObject(this.character.x + 0, this.character.y + 90)
                    this.throwableObject.push(bottle);
                    this.throw()
                    if (!this.mute) {
                        this.throw_sound.play();
                    }
                    this.bottlebar.setpercentage_bottle(-10)
                    this.throwtime = new Date().getTime();
                }
            }
        }
    }
    /**
       * checks collision between enemy and  bottles
       */
    checkcollisions_salsa_throw() {
        this.throwableObject.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.hit()
                    if (!this.mute) {
                        enemy.chicken_sound.play();
                        this.bottle_collision.play();
                    }
                }
            })
        })
    }
    /**
    * checks collision between charcter and collectable coins
    */
    checkcollisions_coin() {
        this.level.collectable_coin.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coinbar.setpercentage_coin(10);
                coin.y = 1000;
            }
        })
    }
    /**
    * checks collision between charcter and collectable bottles
    */
    checkcollisions_collectable() {
        this.level.collectable.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottlebar.setpercentage_bottle(10);
                bottle.y = 1000;
            }
        })
    }
    /**
    * checks collision between bottle and small endboss and character to endboss
    */
    checkcollisions_endboss() {
        this.throwableObject.forEach((bottle) => {
            if (bottle.isColliding(this.endboss)) {
                this.endboss.hit();
                bottle.splashed = true;
                this.bossbar.setpercentage_endboss(this.endboss.energy)
                if (!this.mute) {
                    this.bottle_collision.play();
                }
            }
        })
        if (this.character.isColliding(this.endboss)) {
            this.endboss.atackTouch = true;
            this.character.hit();
            this.statusBar.setpercentage_health(this.character.energy);
        }
    }

    /**
     * checks collision between charcter and small chickens
     */
    checkcollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (!enemy.isdead)
                    this.character.hit();
                this.statusBar.setpercentage_health(this.character.energy);
            }
        })
    }
    /**
     * draw functions draws the images in to the canvas and clears it everytime 
     */
    draw() {
        ///////zum clearen vom canvis am anfang sonst würden sich die bilder doppelt dreifach anzeigen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0)//für die camera verfolgung

        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectable);
        this.addObjectsToMap(this.level.collectable_coin);
        this.addObjectsToMap(this.throwableObject);


        //fir not movable things
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bossbar)
        this.addToMap(this.bottlebar);
        this.ctx.translate(this.camera_x, 0);
        /////////////

        this.addToMap(this.character);
        this.addToMap(this.endboss);

        this.ctx.translate(-this.camera_x, 0) //für die camera verfolgung

        //draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    /** 
    * adding everything to the map 
    * @param {classes} mo 
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    /**
     * adding everything to the map 
     * @param {classes} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);//for hitbox
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    /**
    * this function is for flipping the image when the 
    * @param {classes} mo 
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
    /**
     * this function is for flipping the image when the 
     * @param {classes} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
}


