/* Fonction constructeur Robot */

function Robot(x, y, vitesse, couleur) {
    this.posX    = x;
    this.posY    = y;
    this.temps   = vitesse;
    this.couleur = couleur;
    this.timeID  = NULL;
    this.eveille = false;
}

Robot.prototype.dessin(ctx, dx, dy) = function(){
    
    var circle  = document.getElementById("circle");
    var context = circle.getContext("2d");

    context.beginpath();
    context.fillStyle = Robot.couleur
    context.arc(10,10,70,0,2*Math.PI);
    context.fill;
};

Robot.prototype.perception()      = function(){
    var tabMvt = [];
    if (gr.mvtAdmis(robot, 0,1)) {
        tabMvt.push("Up")
    }
    if (gr.mvtAdmis(robot, 0,-1)) {
        tabMvt.push("Down")
    }
    if (gr.mvtAdmis(robot, 1,0)) {
        tabMvt.push("Right")
    }
    if (gr.mvtAdmis(robot, -1,0)) {
        tabMvt.push("Left")
    }

    return tabMvt;
}

Robot.prototype.reflexion(tabMvt) = function(){

}

Robot.prototype.action(act)       = function(){

}

Robot.prototype.reveille()        = function(){

}
