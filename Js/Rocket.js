class Rocket{
    constructor(){
        this.x = spaceship.x;
        this.y = spaceship.y;
        this.width = 50;
        this.height = 75;
        
        this.image = loadImage("Images/Rocket.png");

        this.body = createSprite(this.x,this.y,this.width,this.height);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}