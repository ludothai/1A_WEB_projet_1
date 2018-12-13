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

};

Robot.prototype.perception        = function(Grille){

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

    var randInt = getRandomInt(0,3);
    var act     = tabMvt(randInt);

    return act;
}

Robot.prototype.action = function(act){



}

Robot.prototype.reveille = function(){
}
