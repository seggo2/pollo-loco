class collectable extends drawableobject {
    IMAGES_bottle = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    ]
    
    constructor() {
        super();
        this.loadImage(this.IMAGES_bottle);
        this.y = 350;
        this.x = 400 + Math.random() * 2000;
        this.width = 90;
        this.height = 80;
    }
}