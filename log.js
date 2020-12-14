class Log{
    constructor(x, y,height,angle) {
      var options = {
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 20,height, options);
      Matter.Body.setAngle(this.body,angle)
      this.width = 20;
      this.height = height;
      


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3)
      stroke("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };