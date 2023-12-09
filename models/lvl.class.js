class level {
    enemies;
    clouds;
    backgroundObject;
    level_end_x = 2200;
    collectable;
    constructor(enemies, clouds, backgroundObject, collectable) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.collectable = collectable
        this.backgroundObject = backgroundObject;
    }
}