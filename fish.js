class Fish {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,50,30, options);
        this.image = loadImage("images/fish.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 30);
    }
}