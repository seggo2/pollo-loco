class collectable_coin extends drawableobject {
    IMAGES_coin = [
        'img/8_coin/coin_1.png',
    ]
    constructor() {
        super();
        this.loadImage(this.IMAGES_coin);
        this.y = 270 - Math.random() *200;
        this.x = 400 + Math.random() * 2000;
        this.width = 150;
        this.height = 150;
    }
}