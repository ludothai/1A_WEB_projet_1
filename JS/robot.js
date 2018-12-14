/* Fonction constructeur Robot */

function Robot(x, y, vitesse, couleur) {
    this.posX    = x;
    this.posY    = y;
    this.temps   = vitesse;
    this.couleur = couleur;
    this.timeID  = NULL;
    this.eveille = false;
}

Robot.prototype.dessin = function(ctx, dx, dy){

    context.beginPath();
    context.fillStyle = this.couleur
    context.arc(this.posX + dx/2, this.posY + dy/2, dx/2, 0, 2 * Math.PI);
    context.fill()

};

Robot.prototype.perception = function(Grille){

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

Robot.prototype.reflexion   = function(tabMvt){

    var randInt = getRandomInt(0,klcscdsc);
    var act     = tabMvt(randInt);

    return act;
}

Robot.prototype.action = function(act){



}

/* positionne eveille à TRUE  et lance la boucle perception-reflexion-action*/
Robot.prototype.reveille = function(){
    this.eveille = true;

}
