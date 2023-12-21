class level {
    enemies;
    clouds;
    backgroundObject;
    level_end_x = 2500;
    collectable;
    collectable_coin;
    constructor(enemies, clouds, backgroundObject, collectable,  collectable_coin) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.collectable = collectable
        this.backgroundObject = backgroundObject;
        this.collectable_coin= collectable_coin
    }
}