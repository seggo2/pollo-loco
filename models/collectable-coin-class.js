class collectable_coin extends drawableobject {
    IMAGES_coin = [
        'img/8_coin/coin_1.png',
    ]

    offset={
        top:50,
        bottom:100,
        left:20,
        right:40,
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