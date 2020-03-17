class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/IMG20200317170611[1].png");
    this.Visibility=0;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();  
    }
    else{
      World.remove(world,this.body);  
      push();
      this.Visibilty= this.Visibility-5;
      tint(255,this.Visibilty);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }

  }
  score(){
    if( this.Visibility<0 && this.Visibility>-1005 ){
      score++;
    }
  }
};