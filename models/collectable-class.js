class collectable extends drawableobject {
    IMAGES_bottle = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    ]
    offset={
        top:0,
        bottom:0,
        left:0,
        right:0,
    };

    constructor() {
        super();
        this.loadImage(this.IMAGES_bottle);
        this.y = 350;
        this.x = 400 + Math.random() * 1800;
        this.width = 90;
        this.height = 80;
    }
}