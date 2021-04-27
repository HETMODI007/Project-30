class Block{
    constructor(x, y, width, height) {
      
        var options = {
          
            restitution :0.4,
            friction :0.0,
            //isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visiblity = 255;
        this.trajectory =[];
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed < 3){
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
       }
       else{
         World.remove(world, this.body);
         push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }


        if(this.body.velocity.x > 10 && this.body.position.x > 200){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }

        for(var i=0; i<this.trajectory.length; i++){
          image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
        }
      
        
      }
}