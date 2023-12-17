class collectable_coin extends drawableobject {
    IMAGES_coin = [
        'img/8_coin/coin_1.png',
    ]

    offset={
        top:0,
        bottom:0,
        left:0,
        right:0,
    };
    
    constructor() {
        super();
        this.loadImage(this.IMAGES_coin);
        this.y = 100 - Math.random() *150;
        this.x = 400 + Math.random() * 2000;
        this.width = 150;
        this.height = 150;
    }
}