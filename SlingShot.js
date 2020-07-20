class SlingShot{
    constructor(bodyb,bodyl){
        var options = {

            bodyA: bodyb,
            bodyB: bodyl,
            stiffness:0.04,
            length:10
    
        }
    
        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }
    display(){
        var PointA = this.Sling.bodyA.position;
        var PointB = this.Sling.bodyB.position;

        strokeWeight(4);
        line(PointA.x,PointA.y,PointB.x,PointB.y);
        
    }
}